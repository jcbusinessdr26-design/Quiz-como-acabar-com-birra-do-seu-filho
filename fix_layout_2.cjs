const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Helper to replace classes
function replaceClass(oldStr, newStr) {
  content = content.replace(oldStr, newStr);
}

// Screen 18
replaceClass(
  '<h2 className="text-3xl font-extrabold text-[#2C303A] leading-tight mb-6">',
  '<h2 className="text-3xl font-extrabold text-[#2C303A] leading-tight mb-6 text-center">'
);
replaceClass(
  '<p className="text-xl text-[#848CB8] font-medium mb-6 leading-relaxed">',
  '<p className="text-xl text-[#848CB8] font-medium mb-6 leading-relaxed text-left">'
);
replaceClass(
  '<p className="text-[#6B7280] text-lg mb-8">',
  '<p className="text-[#6B7280] text-lg mb-8 text-left">'
);

// Screen 19
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-8 leading-tight">',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-8 leading-tight text-center">'
);

// Screen 20
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-6 leading-tight">',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-6 leading-tight text-center">'
);
replaceClass(
  '<p className="text-[#6B7280] text-lg mb-6 leading-relaxed">',
  '<p className="text-[#6B7280] text-lg mb-6 leading-relaxed text-left">'
);

// Screen 21
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-4 leading-tight">',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-4 leading-tight text-center">'
);
replaceClass(
  '<p className="text-[#6B7280] text-lg mb-8">',
  '<p className="text-[#6B7280] text-lg mb-8 text-left">'
);

// Screen 22
replaceClass(
  '<h2 className="text-2xl font-bold mb-4 leading-tight">',
  '<h2 className="text-2xl font-bold mb-4 leading-tight text-center">'
);
replaceClass(
  '<p className="text-[#E5E7EB] text-lg mb-8">',
  '<p className="text-[#E5E7EB] text-lg mb-8 text-left">'
);

// Screen 23
replaceClass(
  '<section className="px-6 py-12 bg-white text-center">',
  '<section className="px-6 py-12 bg-white">'
);
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-6">Quem criou esse método</h2>',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-6 text-center">Quem criou esse método</h2>'
);

// Screen 24
replaceClass(
  '<h2 className="text-3xl font-extrabold text-[#2C303A] mb-6 leading-tight">',
  '<h2 className="text-3xl font-extrabold text-[#2C303A] mb-6 leading-tight text-center">'
);
replaceClass(
  '<p className="text-xl text-[#848CB8] font-medium mb-8">',
  '<p className="text-xl text-[#848CB8] font-medium mb-8 text-left">'
);

// Screen 27
// Note: section already has text-center, we should remove it and apply text-center to h2, and text-left to p
replaceClass(
  '<section className="px-6 py-12 bg-white text-center">',
  '<section className="px-6 py-12 bg-white">'
);
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-6 leading-tight">',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-6 leading-tight text-center">'
);
replaceClass(
  '<p className="text-[#6B7280] text-lg leading-relaxed">',
  '<p className="text-[#6B7280] text-lg leading-relaxed text-left">'
);

// Screen 28
replaceClass(
  '<div className="bg-white p-8 rounded-3xl shadow-md border-2 border-[#E5E7EB] text-center">',
  '<div className="bg-white p-8 rounded-3xl shadow-md border-2 border-[#E5E7EB]">'
);
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-4">Você pode testar com mais segurança</h2>',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-4 text-center">Você pode testar com mais segurança</h2>'
);
replaceClass(
  '<p className="text-[#6B7280] leading-relaxed">',
  '<p className="text-[#6B7280] leading-relaxed text-left">'
);

// Screen 29
replaceClass(
  '<section className="px-6 py-12 bg-[#848CB8] text-white text-center">',
  '<section className="px-6 py-12 bg-[#848CB8] text-white">'
);
replaceClass(
  '<h2 className="text-3xl font-bold mb-6 leading-tight">',
  '<h2 className="text-3xl font-bold mb-6 leading-tight text-center">'
);
replaceClass(
  '<p className="text-xl text-[#E5E7EB] mb-8">',
  '<p className="text-xl text-[#E5E7EB] mb-8 text-center">'
);

// Screen 30
replaceClass(
  '<div className="relative z-10 text-center">',
  '<div className="relative z-10">'
);
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-2">Sobre a especialista</h2>',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-2 text-center">Sobre a especialista</h2>'
);
replaceClass(
  '<p className="text-[#848CB8] font-bold mb-6">[Nome da Especialista]</p>',
  '<p className="text-[#848CB8] font-bold mb-6 text-center">[Nome da Especialista]</p>'
);

// Screen 31
replaceClass(
  '<section className="px-6 py-16 bg-[#FAF8F5] text-center border-t border-gray-200">',
  '<section className="px-6 py-16 bg-[#FAF8F5] border-t border-gray-200">'
);
replaceClass(
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-8 leading-tight">',
  '<h2 className="text-2xl font-bold text-[#2C303A] mb-8 leading-tight text-center">'
);
replaceClass(
  '<div className="bg-white p-6 rounded-2xl shadow-sm mb-8 inline-block mx-auto border border-gray-100">',
  '<div className="bg-white p-6 rounded-2xl shadow-sm mb-8 mx-auto border border-gray-100 text-center">'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Layout fixed');
