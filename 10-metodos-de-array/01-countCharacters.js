// 1 - Crie uma função que mostre a quantidade de personagens

const data = require('./data.json');

const countCharacters = () => {
  return data.characters.length;
}

console.log(countCharacters());
