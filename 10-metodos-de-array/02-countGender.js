// 2 - Contar a quantidade de personagens através do gênero

const data = require('./data.json');

const countGender = (gender) => {
  const genderFiltered = data.characters
    .filter((character) => character.gender === gender)
    .sort((a, b) => a.name.localeCompare(b.name));

  return genderFiltered;
};

console.log(countGender('M'));
