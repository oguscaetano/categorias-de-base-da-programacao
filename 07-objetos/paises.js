const countriesDataBase = require('./data.json');
// Crie uma função que recebe uma região por parâmetro e retorne um array de objetos no formato:
/* 
{
  countryName: 'Afghanistan',
  population: 40218234,
  languages: [ 'Pashto', 'Uzbek', 'Turkmen' ]
}, 
*/

const getCountriesByRegion = (data, region) => {
  const filterCountries = [];

  for (let index = 0; index < data.length; index += 1) {
    const langNames = [];

    if (data[index].region === region) {
      for (let indexLang = 0; indexLang < data[index].languages.length; indexLang += 1) {
        langNames.push(data[index].languages[indexLang].name);
      }
      filterCountries.push({
        countryName: data[index].name,
        population: data[index].population,
        languages: langNames,
      });
    }    
  }

  return filterCountries;
}

console.log(getCountriesByRegion(countriesDataBase, 'Europe'));
