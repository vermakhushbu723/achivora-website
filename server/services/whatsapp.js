import { env } from '../config/env.js';

/**
 * WhatsApp alerts for new form submissions.
 *
 * Sending a WhatsApp message always goes through a gateway — there is no
 * way to post into WhatsApp directly from a server — so this supports the
 * three that fit this site, picked with `WHATSAPP_PROVIDER`:
 *
 *   callmebot  free, no business account; needs a one-time API key that the
 *              recipient gets by messaging the CallMeBot number once.
 *   meta       the official WhatsApp Cloud API; needs a Meta business
 *              account, a phone number id and a permanent token.
 *   twilio     Twilio's WhatsApp sender; needs an account SID and token.
 *
 * Delivery is best-effort and deliberately never throws: a visitor's form
 * must be accepted even when the gateway is down, because the submission is
 * already safely in the database by the time this runs. Failures are logged
 * and recorded on the submission so the admin panel can show them.
 */

const TYPE_LABEL = {
  enquiry: 'Project Enquiry',
  contact: 'Contact Message',
  application: 'Job Application',
};

/** `coverNote` -> "Cover note", `nda` -> "NDA". */
function fieldLabel(key) {
  const ACRONYMS = { nda: 'NDA', url: 'URL' };
  if (ACRONYMS[key]) return ACRONYMS[key];
  const spaced = key.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

/** Human-readable alert, kept short enough to read in a notification. */
export function buildMessage(doc) {
  const lines = [
    `New ${TYPE_LABEL[doc.formType] ?? 'Submission'} - Achivora`,
    '',
    `Name: ${doc.name}`,
    `Email: ${doc.email}`,
  ];

  if (doc.phone) lines.push(`Phone: ${doc.phone}`);

  for (const [key, value] of Object.entries(doc.extra ?? {})) {
    if (value === '' || value === null || value === undefined) continue;
    lines.push(`${fieldLabel(key)}: ${typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}`);
  }

  if (doc.message) {
    lines.push('', `Message: ${doc.message.slice(0, 600)}`);
  }

  lines.push('', `Received: ${new Date(doc.createdAt ?? Date.now()).toLocaleString('en-IN')}`);
  lines.push('View all: https://achivora.com/admin');

  return lines.join('\n');
}

/* ── Providers ────────────────────────────────────────────────────────── */

async function sendViaCallMeBot(to, text) {
  if (!env.whatsapp.callmebotKey) {
    throw new Error('WHATSAPP_CALLMEBOT_KEY is not set');
  }
  const url =
    'https://api.callmebot.com/whatsapp.php' +
    `?phone=${encodeURIComponent(to)}` +
    `&text=${encodeURIComponent(text)}` +
    `&apikey=${encodeURIComponent(env.whatsapp.callmebotKey)}`;

  const res = await fetch(url, { method: 'GET' });
  const body = await res.text();

  // CallMeBot answers 200 with an HTML body even for some failures, so the
  // body is what actually says whether the message went out.
  if (!res.ok || /error|invalid|not found/i.test(body)) {
    throw new Error(`CallMeBot rejected the message: ${body.slice(0, 160)}`);
  }
  return { provider: 'callmebot', detail: body.slice(0, 120) };
}

async function sendViaMeta(to, text) {
  const { metaToken, metaPhoneId } = env.whatsapp;
  if (!metaToken || !metaPhoneId) {
    throw new Error('WHATSAPP_META_TOKEN / WHATSAPP_META_PHONE_ID are not set');
  }

  const res = await fetch(`https://graph.facebook.com/v21.0/${metaPhoneId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${metaToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: to.replace('+', ''),
      type: 'text',
      text: { preview_url: false, body: text },
    }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Meta API ${res.status}: ${JSON.stringify(body).slice(0, 200)}`);
  }
  return { provider: 'meta', detail: body.messages?.[0]?.id ?? 'sent' };
}

async function sendViaTwilio(to, text) {
  const { twilioSid, twilioToken, twilioFrom } = env.whatsapp;
  if (!twilioSid || !twilioToken || !twilioFrom) {
    throw new Error('WHATSAPP_TWILIO_SID / _TOKEN / _FROM are not set');
  }

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: `whatsapp:${twilioFrom}`,
        To: `whatsapp:${to}`,
        Body: text,
      }),
    },
  );

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Twilio ${res.status}: ${body.message ?? JSON.stringify(body).slice(0, 160)}`);
  }
  return { provider: 'twilio', detail: body.sid ?? 'sent' };
}

const PROVIDERS = {
  callmebot: sendViaCallMeBot,
  meta: sendViaMeta,
  twilio: sendViaTwilio,
};

/** Returns a message naming what is still missing, or null when ready. */
function missingCredentials(provider) {
  const w = env.whatsapp;
  if (provider === 'callmebot' && !w.callmebotKey) {
    return 'WHATSAPP_CALLMEBOT_KEY is not set';
  }
  if (provider === 'meta' && (!w.metaToken || !w.metaPhoneId)) {
    return 'WHATSAPP_META_TOKEN / WHATSAPP_META_PHONE_ID are not set';
  }
  if (provider === 'twilio' && (!w.twilioSid || !w.twilioToken || !w.twilioFrom)) {
    return 'WHATSAPP_TWILIO_SID / _TOKEN / _FROM are not set';
  }
  return null;
}

/**
 * Sends the alert and returns what happened, so the caller can record it.
 * Resolves either way — it never rejects.
 */
export async function notifySubmission(doc) {
  const { enabled, to, provider } = env.whatsapp;

  if (!enabled) {
    return { status: 'disabled' };
  }
  if (!to) {
    console.warn('[whatsapp] WHATSAPP_TO is not set; skipping alert');
    return { status: 'skipped', error: 'no recipient configured' };
  }

  const send = PROVIDERS[provider];
  if (!send) {
    console.warn(`[whatsapp] unknown provider "${provider}"`);
    return { status: 'failed', error: `unknown provider "${provider}"` };
  }

  // Not configured yet is a setup state, not a delivery failure — say so
  // plainly once per submission rather than logging it as an error.
  const missing = missingCredentials(provider);
  if (missing) {
    console.warn(`[whatsapp] not configured: ${missing}`);
    return { status: 'skipped', error: missing, at: new Date() };
  }

  const text = buildMessage(doc);

  // One retry: these gateways fail transiently often enough to be worth it,
  // and a duplicate alert is a far smaller problem than a missed lead.
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const result = await send(to, text);
      console.log(`[whatsapp] alert sent via ${result.provider} for ${doc.formType} from ${doc.email}`);
      return { status: 'sent', provider: result.provider, at: new Date() };
    } catch (err) {
      if (attempt === 2) {
        console.error(`[whatsapp] alert failed for ${doc.email}: ${err.message}`);
        return { status: 'failed', error: err.message.slice(0, 300), at: new Date() };
      }
      await new Promise((r) => setTimeout(r, 1200));
    }
  }

  return { status: 'failed', error: 'unreachable' };
}
