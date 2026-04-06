const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace question titles
content = content.replace(/<h2 className="text-2xl font-bold text-\[#2C303A\] mb-8">/g, '<h2 className="text-2xl font-bold text-[#2C303A] mb-10 text-center max-w-xs mx-auto leading-tight">');

// Screen 3 (Short Social Proof)
const screen3Old = `<div className="flex-1 flex flex-col items-center justify-center">
              <Img src="selo-avaliacao-49.png" className="w-24 h-24 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#2C303A] mb-4 leading-tight">
                Milhares de mães já usaram esse método para construir uma rotina de sono mais tranquila em casa.
              </h2>
              <p className="text-[#6B7280] text-lg mb-6">
                Mais de 15.000 mães já aplicaram o método em diferentes fases da infância e relataram melhora no adormecer, na rotina e nas noites em família.
              </p>
              <div className="flex items-center justify-center gap-1 text-yellow-400 font-bold text-lg bg-[#FAF8F5] py-2 px-4 rounded-lg inline-flex">
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <span className="text-[#2C303A] ml-2">Avaliação média: 4,9 estrelas</span>
              </div>
            </div>`;

const screen3New = `<div className="flex-1 flex flex-col justify-center">
              <Img src="selo-avaliacao-49.png" className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#2C303A] mb-6 leading-tight text-center max-w-sm mx-auto">
                Milhares de mães já usaram esse método para construir uma rotina de sono mais tranquila em casa.
              </h2>
              <p className="text-[#6B7280] text-lg mb-8 text-left w-full">
                Mais de 15.000 mães já aplicaram o método em diferentes fases da infância e relataram melhora no adormecer, na rotina e nas noites em família.
              </p>
              <div className="flex items-center justify-center gap-2 text-yellow-400 font-bold text-sm bg-white py-3 px-5 rounded-xl shadow-sm border border-gray-100 w-full">
                <div className="flex">
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                  <Star className="fill-current w-4 h-4" />
                </div>
                <span className="text-[#2C303A] ml-2">Avaliação média: 4,9 estrelas</span>
              </div>
            </div>`;

content = content.replace(screen3Old, screen3New);

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced');
