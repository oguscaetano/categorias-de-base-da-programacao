const menu = require('./menu');

/* 
RELATÓRIO DE ITEMS VENDIDOS NO MC DONALDS
Crie uma função que retorna um relatório com a quantidade de cada item que está a venda. Esse relatório precisa estar no seguinte formato:
{
  sanduiches: 0,
  acompanhamentos: 0,
  sobremesas: 0,
  bebidas: 0,
}
*/

const getMcInfo = (data) => {
  const report = {
    sanduiches: data.sanduiches.length,
    acompanhamentos: data.acompanhamentos.length,
    sobremesas: data.sobremesas.length,
    bebidas: data.bebidas.length,
  }

  return report;
};

// console.log(getMcInfo(menu));

// Crie uma função que retorne a quantidade total de itens vendidos.

const totalItems = () => {
  const items = getMcInfo(menu);

  const values = Object.values(items);

  let total = 0;

  for (let index = 0; index < values.length; index += 1) {
    total += values[index];
  }

  return total;
};

console.log(totalItems());