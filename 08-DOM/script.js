// const foto = document.getElementById('foto-jogador');
// const info = document.querySelector('p');
const sectionJogador = document.querySelector('.jogador');

const randomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomPlayer = () => {
  sectionJogador.innerHTML = '';

  const array = data.infoJogadores;
  const posicao = randomIndex(0, array.length - 1);
  
  const fotoJogador = document.createElement('img');
  const infoJogador = document.createElement('p');
  
  fotoJogador.src = `${array[posicao].picture}`;
  infoJogador.innerText = `Nome: ${array[posicao].nome}
  País: ${array[posicao].pais}
  Score: ${array[posicao].classificacao_geral}`;

  sectionJogador.appendChild(fotoJogador);
  sectionJogador.appendChild(infoJogador);
};

getRandomPlayer();
// setInterval(() => getRandomPlayer(), 5000);
