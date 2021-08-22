const axios = require('axios');
const http = require('https');
// usando promisse
function getName(name) {
  const api = 'https://rickandmortyapi.com/api/character/';
  return new Promise((resolve, reject) => {
    const takeApi = axios.get(`${api}${name}`);
    if (name) resolve(takeApi);
    return reject();
  });
}

Promise.all([getName(1), getName(2)]).then((r) => console.log(r));

// sem promisse

function takePersonagem(personagem, callback) {
  const api = `https://rickandmortyapi.com/api/character/${personagem}`;
  http.get(api, (res) => {
    let result = null;

    res.on('data', (data) => {
      result += data;
    });

    res.on('end', () => {
      return callback(result);
    });
  });
}

takePersonagem(1, (data) => {
  console.log(data);
});
