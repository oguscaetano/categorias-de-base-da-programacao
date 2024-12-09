const showCep = document.getElementById('show-cep');
const inputCep = document.getElementById('input-cep');
const form = document.querySelector('form');
const div = document.querySelector('div');

const fetchAPI = (xablau) => {
  const result = fetch(`https://pokeapi.co/api/v2/pokemon/${xablau}`)
    .then((resp) => resp.json())
    .then((data) => data);

  return result;
}

form.addEventListener('submit', async (event) => {
  div.innerHTML = '';
  event.preventDefault();

  const data = await fetchAPI(inputCep.value);

  showCep.innerText = `Nome: ${JSON.stringify(data.name, false, 2)}`;
  
  const foto = document.createElement('img');
  foto.src = `${data.sprites.front_default}`;
  div.appendChild(foto);
});
