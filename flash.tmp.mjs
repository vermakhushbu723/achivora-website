import puppeteer from 'puppeteer-core';
const OUT = process.argv[2];
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'], executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });

// Sample the background colour every 40ms through first load: any light
// frame before the dark one is the flash the user reported.
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
const samples = [];
p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' }).catch(()=>{});
for (let i = 0; i < 40; i++) {
  await new Promise(r => setTimeout(r, 40));
  try {
    samples.push(await p.evaluate(() => getComputedStyle(document.body).backgroundColor + '|' + document.documentElement.className));
  } catch { samples.push('(navigating)'); }
}
const uniq = [...new Set(samples)];
console.log('background states seen during load:');
uniq.forEach(u => console.log('   ', u));

await new Promise(r => setTimeout(r, 1500));
const geo = await p.evaluate(() => {
  const h = document.querySelector('header').getBoundingClientRect();
  const s = document.querySelector('main').querySelector('section').getBoundingClientRect();
  return {
    headerH: Math.round(h.height), headerBottom: Math.round(h.bottom),
    heroTop: Math.round(s.top), heroH: Math.round(s.height),
    gap: Math.round(s.top - h.bottom),
    headerBg: getComputedStyle(document.querySelector('header div:nth-child(2)')).backgroundColor,
    marquees: document.querySelectorAll('.marquee').length,
  };
});
console.log('\ngeometry:', geo);
await p.screenshot({ path: OUT + '/hero-final.png' });
await b.close();
