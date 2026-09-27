import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'], executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 3500));
console.log(await p.evaluate(() => {
  const el = document.querySelector('.orbit__swap');
  const hits = [];
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    for (const r of rules) {
      if (r.selectorText) {
        try { if (el.matches(r.selectorText) && /opacity|animation/.test(r.cssText)) hits.push(r.cssText.slice(0, 160)); } catch {}
      } else if (r.media) {
        for (const ir of r.cssRules || []) {
          if (ir.selectorText) { try { if (el.matches(ir.selectorText) && /opacity|animation/.test(ir.cssText)) hits.push('@media ' + r.conditionText + ' { ' + ir.cssText.slice(0,140) + ' }'); } catch {} }
        }
      }
    }
  }
  return { classes: el.className, inline: el.getAttribute('style'), hits, parentOpacity: getComputedStyle(el.parentElement).opacity };
}));
await b.close();
