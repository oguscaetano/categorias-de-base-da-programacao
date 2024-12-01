const select = document.getElementById('listaPersonagens');
const personagem = document.querySelector('#mostraPersonagem');
const botaoVai = document.querySelector('#btn-vai');

const addOptions = () => {
  data.characters.forEach((character) => {
    const newOption = document.createElement('option');
    newOption.innerText = `${character.name}`;
    select.appendChild(newOption);
  })
};

select.addEventListener('change', () => {
  personagem.innerHTML = '';

  const bixo = data.characters.find((character) => character.name === select.value);
  const bixoEspecie = data.species.find((specie) => specie.id === bixo.speciesId);
  
  const newImg = document.createElement('img');
  const nomeDoBixo = document.createElement('p');
  const especieBixo = document.createElement('p');
  newImg.src = `${bixo.image}`;
  nomeDoBixo.innerText = `Nome: ${bixo.name}`;
  especieBixo.innerText = `Espécie: ${bixoEspecie.name}`;
  personagem.appendChild(newImg);
  personagem.appendChild(nomeDoBixo);
  personagem.appendChild(especieBixo);
});

botaoVai.addEventListener('click', () => {
  alert('Dragon Ball > Naruto')
})

addOptions();
