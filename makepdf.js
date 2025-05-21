const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    await page.goto('http://localhost:5000', { waitUntil: 'networkidle2' });

    await page.pdf({ path: 'resumes/resume.pdf', format: 'A4', printBackground: true, pageRanges: '1-2'});

    await browser.close();
})();
