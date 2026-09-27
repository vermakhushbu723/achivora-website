import puppeteer from 'puppeteer-core';
const OUT = process.argv[2];
const PAGES = ['/', '/services', '/services/web-development', '/solutions', '/industries',
  '/about', '/portfolio', '/career', '/insights', '/locations', '/contact', '/faq',
  '/sitemap', '/privacy-policy', '/terms-conditions', '/app-development', '/admin'];
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'], executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
let bad = 0;
for (const path of PAGES) {
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message.slice(0, 120)));
  p.on('console', m => { if (m.type() === 'error' && !/favicon/i.test(m.text())) errs.push(m.text().slice(0, 120)); });
  try {
    await p.goto('http://localhost:3000' + path, { waitUntil: 'domcontentloaded', timeout: 40000 });
    await new Promise(r => setTimeout(r, 2200));
    const m = await p.evaluate(() => ({
      docH: Math.round(document.body.scrollHeight),
      firstSection: Math.round(document.querySelector('main')?.querySelector('section')?.getBoundingClientRect().height ?? 0),
      brokenImgs: [...document.querySelectorAll('img')].filter(i => i.complete && i.naturalWidth === 0).length,
      videos: document.querySelectorAll('video').length,
      logo: document.querySelector('header img, aside img')?.getAttribute('src') ?? '(none)',
      theme: document.documentElement.className,
    }));
    const ok = errs.length === 0 && m.brokenImgs === 0;
    if (!ok) bad++;
    console.log(`${ok ? 'ok  ' : 'FAIL'} ${path.padEnd(28)} page=${String(m.docH).padStart(5)}px hero=${String(m.firstSection).padStart(4)}px video=${m.videos} broken=${m.brokenImgs} logo=${m.logo}`);
    errs.slice(0, 2).forEach(e => console.log('        ' + e));
  } catch (e) { console.log(`FAIL ${path} ${e.message.slice(0, 80)}`); bad++; }
  await p.close();
}
await b.close();
console.log(bad ? `\n${bad} page(s) with problems` : '\nall pages clean');
