const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'text.txt');

const exibirConteudo = (caminho) => {
  return new Promise((resolve, reject) => {
    if (!caminho) return reject();
    try {
      fs.readFile(caminho, (err, conteudo) => resolve(conteudo.toString()));
    } catch (err) {
      reject(err);
    }
  });
};

Promise.resolve(exibirConteudo(caminho)).then((r) => console.log(r));

// const r = exibirConteudo(caminho);
// r.then((r) => console.log(r.split('\n').join()));
