import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'], executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 2000));
const series = await p.evaluate(() => new Promise(res => {
  const out = [];
  let node = document.querySelector('.orbit__swap');
  let recreated = 0;
  const t0 = performance.now();
  const id = setInterval(() => {
    const cur = document.querySelector('.orbit__swap');
    if (cur !== node) { recreated++; node = cur; }
    out.push(Math.round(performance.now() - t0) + 'ms op=' + getComputedStyle(cur).opacity + ' anims=' + cur.getAnimations().length);
    if (out.length >= 30) { clearInterval(id); res({ out, recreated }); }
  }, 150);
}));
console.log('element recreated', series.recreated, 'times in 4.5s');
console.log(series.out.join('\n'));
await b.close();
