const num1 = 0;
const num2 = 100;
let result = '';

if (num1 <= 10) {
  result = 'Tamanho 1';
} else if (num1 > 10 || num1 <= 20) {
  result = 'Tamanho 2';
} else if (num1 > 20 && num1 <= 30) {
  result = 'Tamanho 3';
} else if (num1 > 30 && num1 <= 40) {
  result = 'Tamanho 4';
} else if (num1 > 40 && num1 <= 50) {
  result = 'Tamanho 5';
} else {
  result = 'Tamanho 9999';
}

// console.log('Resultado: ' + result);
// console.log(`Resultado: ${10 + 89}`);

// num1 > num2 ? console.log('SIM') : console.log('NÃO');


// =========================================

// PAR OU ÍMPAR
if (num1 % 2 === 0) {
  console.log('PAR');
} else {
  console.log('ÍMPAR');
}

console.log(10/0);
