// Crie uma função que retorne o maior e o menor número de um array

const arrayNumeros = [10, 78, 3, 12, 1];
const arrayNumeros2 = [78, 34, 0, -9, 189, 7];

const maiorMenorNumero = (array) => {
  let maior = array[0];
  let menor = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }

    if (array[index] < menor) {
      menor = array[index];
    }
  }

  return [maior, menor];
}
// [78, 1]

// console.log(maiorMenorNumero(arrayNumeros));
// console.log(maiorMenorNumero(arrayNumeros2));



// Crie uma função que retorne um array ordenado de forma crescente

function ordenacao (array) {
  let temp;

  for (let index = 0; index < array.length; index += 1) {
    for (let compare = index + 1; compare < array.length; compare += 1) {
      if (array[index] > array[compare]) {
        temp = array[index];
        array[index] = array[compare];
        array[compare] = temp;
      }
    }
  }

  return array;
};

// console.log(ordenacao(arrayNumeros2));

// const ordenacaoComSort = (array) => array.sort()


const arrayExemplo = [9, 0, 3, 4, 1, 2, 10, 56, 33];

arrayExemplo.sort((a, b) => b - a);



console.log(arrayExemplo);
