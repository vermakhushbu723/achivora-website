import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'], executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 3000));
console.log(await p.evaluate(() => {
  const el = document.querySelector('.orbit__swap');
  const r = el.getBoundingClientRect();
  const kid = el.querySelector('p');
  return {
    rect: { w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top) },
    display: getComputedStyle(el).display,
    visibility: getComputedStyle(el).visibility,
    opacity: getComputedStyle(el).opacity,
    filter: getComputedStyle(el).filter,
    transform: getComputedStyle(el).transform,
    childOpacity: kid ? getComputedStyle(kid).opacity : null,
    childColor: kid ? getComputedStyle(kid).color : null,
    // Force a reflow-free re-read after clearing the animation:
    afterClear: (() => { el.style.animation = 'none'; return getComputedStyle(el).opacity; })(),
  };
}));
await b.close();
