/*
Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
*/

function falar(nome) {
  return console.log(`ola, ${nome.toString()}!`);
}

falar('eurico');

/* 

Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
*/

const getAge = (age) => console.log(age * 365);

getAge(25);

const calcularSalario = (qtdHorasTrabalhadas, valorHora) => {
  return `Salario ganho igual a: ${qtdHorasTrabalhadas * valorHora}`;
};

const result = calcularSalario(180, 60);
console.log(result);

/*
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

function nomeDoMes(mes) {
  switch (mes) {
    case 1:
      console.log('Janeiro');
      break;
    case 2:
      console.log('Fevereiro');
      break;
    case 3:
      console.log('Março');
      break;
    case 4:
      console.log('Abril');
      break;
    case 5:
      console.log('Maio');
      break;
    case 6:
      console.log('Junho');
      break;
    case 7:
      console.log('Julho');
      break;

    default:
      console.log(`Desculpe, o mes referente ao numero ${mes} não existe!`);
      break;
  }
  return mes;
}

function receberNomeDoMes(numero) {
  const mapeamento = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  return mapeamento[--numero];
}

receberNomeDoMes();

nomeDoMes(3);

// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

const maiorOuIgual = (n1, n2) => (n1 >= n2 ? true : false);

const r = maiorOuIgual(2, '2');
console.log(r);

/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/

function inverso(value) {
  const type = typeof value;
  const pattern = `booleano ou número esperados, mas o parâmetro é do tipo ${type}`;

  if (type === 'boolean') return !value;
  if (type === 'number') return !value - value;
  else return pattern;
}

console.log(inverso('programação'));

/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

const estaEntre = (num, min, max, inclusivo = false) => {
  return inclusivo ? num >= min && num <= max : num > min && num < max;
};

const r1 = estaEntre(2, 1, 5);
console.log(r1);

/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicar(numeroA, numeroB) {
  if (numeroA === 0 || numeroB === 0) return 0;

  const maiorNumero = Math.max(numeroA, numeroB);
  const menorNumero = Math.min(numeroA, numeroB);

  function multiplicarRecursivamente(numero, multiplicador) {
    return multiplicador === 1
      ? numero
      : numero + multiplicarRecursivamente(numero, multiplicador - 1);
  }

  // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
  return multiplicarRecursivamente(maiorNumero, menorNumero);
}
console.log(multiplicar(5, 5));

function repetir(item, quantidade) {
  return Array(quantidade).fill(item);
}

console.log(repetir('código', 2));

// Elabore uma função que recebe um número como parâmetro e retorne uma string /// com o símbolo "+" na quantidade especificada no parâmetro.

// function simboloMais(quantidade) {
//   let el = '';

//   for (let index = 0; index < quantidade; index++) {
//     ell += '+';
//   }

//   return el;
// }

function simboloMais(quantidade) {
  return Array(quantidade).fill('+').join('');
}

console.log(simboloMais(5));

function receberPrimeiroEUltimoElemento(elementos) {
  const indiceDoPrimeiroElemento = 0;

  const indiceDoUltimoElemento = elementos.length - 1;

  const primeiroElemento = elementos[indiceDoPrimeiroElemento];

  const ultimoElemento = elementos[indiceDoUltimoElemento];

  return [primeiroElemento, ultimoElemento];
}
