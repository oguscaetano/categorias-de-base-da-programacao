// 3 - Mostre o primeiro personagem de acordo com o id da espécie

const data = require('./data.json');

const getCharacterBySpecie = (id) => data.species.find((specie) => specie.id === id);

console.log(getCharacterBySpecie(4));