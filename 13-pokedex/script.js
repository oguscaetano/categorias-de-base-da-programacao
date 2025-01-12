const form = document.querySelector('form');
const entradaPesquisa = document.getElementById('pesquisa');
const infoPokemon = document.getElementById('info-pokemon');
const nomePokemon = document.getElementById('nome-pokemon');
const imagemPokemon = document.getElementById('imagem-pokemon');
const alturaPokemon = document.getElementById('altura-pokemon');
const pesoPokemon = document.getElementById('peso-pokemon');
const tipoPokemon = document.getElementById('tipo-pokemon');
const mensagemErro = document.getElementById('mensagem-erro');
const listaEvolucoes = document.getElementById('lista-evolucoes');
const carregando = document.getElementById('carregando');
const botaoAnterior = document.getElementById('pokemon-anterior');
const botaoProximo = document.getElementById('pokemon-proximo');

const status = {
  hp: document.getElementById('status-hp'),
  ataque: document.getElementById('status-ataque'),
  defesa: document.getElementById('status-defesa'),
  ataqueEspecial: document.getElementById('status-ataque-especial'),
  defesaEspecial: document.getElementById('status-defesa-especial'),
  velocidade: document.getElementById('status-velocidade'),
}

let idAtualPokemon = null;

const atualizarBarraStatus = (elemento, valor) => {
  elemento.style.width = `${valor / 2}%`;
  elemento.innerHTML = `<span>${valor}</span>`;
}

const buscarEvolucoes = async (urlEspecie) => {
  try {
    const respostaEspecie = await fetch(urlEspecie);
    const dadosEspecie = await respostaEspecie.json();
    const respostasEvolucao = await fetch(dadosEspecie.evolution_chain.url);
    const dadosEvolucao = await respostasEvolucao.json();

    // console.log('evolucoes: ', dadosEvolucao);
    
    let cadeia = dadosEvolucao.chain;
    const evolucoes = [];

    do {
      const respostaPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${cadeia.species.name}`);
      const dadosPokemon = await respostaPokemon.json();

      
      evolucoes.push({
        nome: cadeia.species.name,
        id: dadosPokemon.id,
        sprite: dadosPokemon.sprites.front_default,
      });
      
      cadeia = cadeia.evolves_to[0];
      
    } while (cadeia);
    
    // console.log('evolucoes', evolucoes);
    return evolucoes;

  } catch (error) {
    return [];
  }
}

const exibirEvolucoes = (evolucoes) => {
  listaEvolucoes.innerHTML = '';

  if (evolucoes.length <= 1) {
    listaEvolucoes.innerText = 'Este Pokémon não possui evoluções.';
    return;
  }

  evolucoes.forEach((evolucao) => {
    const divEvolucao = document.createElement('div');
    divEvolucao.classList.add('evolucao');

    const fotoEvolucao = document.createElement('img');
    fotoEvolucao.src = evolucao.sprite;
    fotoEvolucao.alt = `Foto do pokémon ${evolucao.nome}`;

    const texto = document.createElement('span');
    texto.innerText = `#${evolucao.id} ${evolucao.nome}`;

    divEvolucao.appendChild(fotoEvolucao);
    divEvolucao.appendChild(texto);
    listaEvolucoes.appendChild(divEvolucao);
  })

}

const buscarPokemon = async (query) => {
  mensagemErro.innerText = '';
  infoPokemon.style.display = '';
  carregando.style.display = 'block';

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

    if (!resposta.ok) {
      throw new Error('Pokémon não encontrado.');
    }

    // console.log('reposta', resposta);

    const pokemon = await resposta.json();

    // console.log('pokemon', pokemon);

    nomePokemon.innerText = `#${pokemon.id} ${pokemon.name.toUpperCase()}`;
    imagemPokemon.src = pokemon.sprites.front_default;
    alturaPokemon.innerText = pokemon.height / 10 + ' m';
    pesoPokemon.innerText = pokemon.weight / 10 + ' kg';
    tipoPokemon.innerText = pokemon.types.map((tipo) => tipo.type.name).join(', ');

    atualizarBarraStatus(status.hp, pokemon.stats[0].base_stat);
    atualizarBarraStatus(status.ataque, pokemon.stats[1].base_stat);
    atualizarBarraStatus(status.defesa, pokemon.stats[2].base_stat);
    atualizarBarraStatus(status.ataqueEspecial, pokemon.stats[3].base_stat);
    atualizarBarraStatus(status.defesaEspecial, pokemon.stats[4].base_stat);
    atualizarBarraStatus(status.velocidade, pokemon.stats[5].base_stat);

    idAtualPokemon = pokemon.id;

    const evolucoes = await buscarEvolucoes(pokemon.species.url);
    exibirEvolucoes(evolucoes);
    
    infoPokemon.style.display = 'block';

    entradaPesquisa.value = '';
    
  } catch (error) {
    mensagemErro.innerText = error.message;
  } finally {
    carregando.style.display = 'none';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = entradaPesquisa.value.trim().toLowerCase();
  buscarPokemon(query);
})

botaoAnterior.addEventListener('click', () => {
  buscarPokemon(idAtualPokemon - 1);
})

botaoProximo.addEventListener('click', () => {
  buscarPokemon(idAtualPokemon + 1);
})