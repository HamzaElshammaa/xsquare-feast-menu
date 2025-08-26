// Minimal PDF text extractor and quick parser for menu items
// Usage: npm run extract:menu

const fs = require('fs');
const path = require('path');

(async () => {
  const pdfPath = process.argv[2] || 'Xsquare/x square menu new1.pdf';
  const abs = path.resolve(process.cwd(), pdfPath);
  if (!fs.existsSync(abs)) {
    console.error('PDF not found at', abs);
    process.exit(1);
  }

  let pdfParse;
  try {
    pdfParse = require('pdf-parse');
  } catch (e) {
    console.error('Missing dependency: pdf-parse. Install with:\n  npm i -D pdf-parse');
    process.exit(1);
  }

  const dataBuffer = fs.readFileSync(abs);
  const data = await pdfParse(dataBuffer);
  const text = data.text;

  console.log('--- RAW TEXT START ---');
  console.log(text);
  console.log('--- RAW TEXT END ---');

  // Naive parse: split lines, try to detect lines that look like "Name ... Price"
  const lines = text.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  const items = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Price patterns (EGP): digits optionally with commas
    const priceMatch = line.match(/(\b\d{2,4}\b)\s*(EGP|LE|ج\.?م\.?|جنيه)?$/i);
    if (priceMatch) {
      const price = priceMatch[1];
      // Item name could be at start of line before price, description may be on next line
      const name = line.replace(priceMatch[0], '').trim().replace(/[\-:\u2013]+\s*$/, '').trim();
      let description = '';
      const next = lines[i + 1] || '';
      if (next && !next.match(/\b\d{2,4}\b/)) {
        description = next;
      }
      if (name && price) {
        items.push({ name, price, description });
      }
    }
  }

  console.log('\nParsed items (best-effort):');
  console.log(JSON.stringify(items, null, 2));
})();
