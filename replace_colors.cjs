const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = {
  '#FDFBF7': '#FAF8F5',
  '#2C3E50': '#2C303A',
  '#596A7A': '#6B7280',
  '#5C7285': '#848CB8',
  '#4A5C6B': '#6A73A0',
  '#D4A373': '#5C6496',
  '#C39362': '#4A5282',
  '#F4F7FB': '#F0F2F8',
  '#E2E8F0': '#E5E7EB',
  '#8A9BA8': '#9CA3AF',
  '#F0F4F8': '#F5EBE6',
};

for (const [oldColor, newColor] of Object.entries(replacements)) {
  content = content.split(oldColor).join(newColor);
}

fs.writeFileSync('src/App.tsx', content);
console.log('Colors replaced');
