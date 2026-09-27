import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'], executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 4000));
const info = await p.evaluate(() => {
  const swap = document.querySelector('.orbit__swap');
  const host = swap?.closest('section');
  const chips = [...document.querySelectorAll('.orbit__chip')].map(c => {
    const r = c.getBoundingClientRect();
    return { text: c.innerText.trim(), left: Math.round(r.left), right: Math.round(r.right) };
  });
  return {
    swapText: swap ? swap.innerText.replace(/\n/g, ' | ') : '(no swap element)',
    swapOpacity: swap ? getComputedStyle(swap).opacity : null,
    sectionRight: host ? Math.round(host.getBoundingClientRect().right) : null,
    viewport: window.innerWidth,
    chips,
  };
});
console.log(JSON.stringify(info, null, 2));
await b.close();
