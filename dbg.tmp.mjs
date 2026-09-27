import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'], executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
await new Promise(r => setTimeout(r, 3000));
console.log(await p.evaluate(() => {
  const el = document.querySelector('.orbit__swap');
  const cs = getComputedStyle(el);
  return {
    reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
    animationName: cs.animationName,
    fillMode: cs.animationFillMode,
    playState: cs.animationPlayState,
    opacity: cs.opacity,
    runningAnimations: el.getAnimations().map(a => ({ name: a.animationName, state: a.playState, time: a.currentTime })),
  };
}));
await b.close();
