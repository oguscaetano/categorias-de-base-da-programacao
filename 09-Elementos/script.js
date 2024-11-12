const selectEstados = document.querySelector('#estados');
const selectCarros = document.getElementById('carros');
const carrosFiltrados = document.getElementById('carrosFiltrados');

const criaEstados = () => {
 
  for (let index = 0; index < estados.UF.length; index += 1) {
    // 1 - criar elemento
    const newOption = document.createElement('option');

    // 2 - popular
    newOption.innerText = `${estados.UF[index].nome}`;
    newOption.value = `${estados.UF[index].sigla}`;

    // 3 - acoplar
    selectEstados.appendChild(newOption);
  }
};

// -----------------------

let arrayTiposCarros = [];

for (let index = 0; index < carros.length; index += 1) {
  arrayTiposCarros.push(carros[index].class);
};

const semDuplicatas = new Set(arrayTiposCarros);

const tiposCarrosSemDuplicatas = [];

for (let tipoCarro of semDuplicatas) {
  tiposCarrosSemDuplicatas.push(tipoCarro);
};

// -----------------------

const criaCarros = () => {
  for (let index = 0; index < tiposCarrosSemDuplicatas.length; index += 1) {
    // 1 - criar elemento
    const newOption = document.createElement('option');

    // 2 - popular
    newOption.innerText = `${tiposCarrosSemDuplicatas[index]}`;

    // 3 - acoplar
    selectCarros.appendChild(newOption);
  }
};

// -----------------------

selectCarros.addEventListener('change', () => {
  carrosFiltrados.innerHTML = '';

  let arrayFiltrado = [];

  for (let index = 0; index < carros.length; index += 1) {
    if (carros[index].class === selectCarros.value) {
      arrayFiltrado.push(carros[index].title);
    }
  }

  for (let index = 0; index < arrayFiltrado.length; index += 1) {
    const newP = document.createElement('p');
    newP.innerText = arrayFiltrado[index];
    newP.className = 'estilizaNomeCarro';
    carrosFiltrados.appendChild(newP);
  }
  
});

criaEstados();
criaCarros();