// 4 - Ordenar os personagens através de um parâmetro

const data = require('./data.json');

const sortCharacter = (prop) => {
  if (typeof data.characters[0][prop] === 'number') {
    return data.characters.sort((a, b) => a[prop] - b[prop]);
  };

  return data.characters.sort((a, b) => a[prop].localeCompare((b[prop])));
};

console.log(sortCharacter('name'));
