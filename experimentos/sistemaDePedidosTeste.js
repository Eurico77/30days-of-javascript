const padraoReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const catalogo = {
  100: ['Cachorro Quente', 3.0],
  200: ['Hambúrguer Simples', 4.0],
  300: ['Cheeseburguer', 5.5],
  400: ['Bauru', 7.5],
  500: ['Refrigerante', 3.5],
  600: ['Suco', 2.8],
};

let pedidoCliente = [
  [00, 2],
  [900, 5],
  [500, 5],
  [600, 2],
];

const getNome = (catalogo, codigo) => {
  console.log(catalogo[codigo]);
  if (catalogo[codigo]) {
    return catalogo[codigo][0];
  } else {
    return 'Produto não cadastrado';
  }
};

const getPreco = (catalogo, codigo) => {
  if (catalogo[codigo]) {
    return catalogo[codigo][1];
  } else {
    return 0;
  }
};

const valorItem = (catalogo, [cod, num]) => {
  let valor = getPreco(catalogo, cod);
  return valor * num;
};

const somarComanda = (catalogo, pedidoCliente) => {
  return pedidoCliente
    .map((item) => valorItem(catalogo, item))
    .reduce((total, item) => total + item);
};

const conferirPedidos = (catalogo, pedidoCliente) => {
  return pedidoCliente
    .map(
      (item) =>
        `${item[1]} x ${getNome(catalogo, item[0])} = ${padraoReal.format(
          valorItem(catalogo, item)
        )}`
    )
    .reduce((total, item) => total + '\n' + item);
};

let valorComanda = padraoReal.format(somarComanda(catalogo, pedidoCliente));

console.log(conferirPedidos(catalogo, pedidoCliente));
console.log('Total = ' + valorComanda);
