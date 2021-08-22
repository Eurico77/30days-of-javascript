//Fazendo o tratamento de erro dentro da Promise
function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      //vai gerar um erro caso o numero sorteado seja menor que chanceErro
      //o math.random vai fazer a randomização entre 0 e 1
      reject('Ocorreu um erro!');
    } else {
      resolve(valor);
    }
  });
}
//antes de criar uma forma de tratar o erro, o erro é reconhecido pelo próprio Node, onde ele avisa que
//não há nenhum tratamento de erro
funcionarOuNao('Testando...', 0.9)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => consol.log(v)
    // (err) => console.log(`Erro Específico: ${err}`)
  ) //como o erro foi tratado dentro de um then, o catch não será chamado nesse caso
  //depois do catch nenhum valor é obtido, por isso ele é, em geral, colocado no fim do código para pegar
  //os erros de todos os fluxos
  .then(() => console.log('Fim!'))
  .catch((err) => console.log(`Erro: ${err}`)); //tratamento do erro!
