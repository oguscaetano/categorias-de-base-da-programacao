const data = require('./data.json');

// for (let index = 0; index < data.characters.length; index += 1) {
//   console.log(data.characters[index].name);
// }

data.characters.forEach((character) => console.log(character.name));