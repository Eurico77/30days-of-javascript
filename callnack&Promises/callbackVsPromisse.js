// 1) Sem uso de Promise (callback hell)
const getPrimeiraLetraEmMinusculo = () => {
  const nomes = ['Ana', 'Bia', 'Leo'];
  const primeiroNome = nomes[0];
  return () => {
    const primeiraLetra = primeiroNome[0];
    return () => {
      const letraMinuscula = primeiraLetra.toLowerCase();
      return letraMinuscula;
    };
  };
};

const primeiroNome = getPrimeiraLetraEmMinusculo();
const primeiraLetra = primeiroNome();
const primeiraLetraEmMinusculo = primeiraLetra();

console.log(primeiraLetraEmMinusculo);

// chamada direta
console.log(getPrimeiraLetraEmMinusculo()()());

// 2) Com uso de Promise
const getFirstName = (element) => element[0];
const getFirstLetter = (letter) => letter[0];
const convertsToLowerCase = (letter) => letter.toLowerCase();

new Promise((resolve, reject) => {
  const names = ['Ana', 'Bia', 'Leo'];
  resolve(names);
})
  .then(getFirstName)
  .then(getFirstLetter)
  .then(convertsToLowerCase)
  .then(console.log);
