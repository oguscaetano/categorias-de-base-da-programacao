const menu = require('./menu');

// todas as chaves
const objKeys = Object.keys(menu);

for (let index = 0; index < objKeys.length; index += 1) {
  // console.log(`${index} - ${objKeys[index]}`);
}

// todos os valores
const objValues = Object.values(menu.acompanhamentos);

// todas as propriedades
const objEntries = Object.entries(menu.sobremesas);

console.log(objEntries);
