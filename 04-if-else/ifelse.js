// EXERCÍCIO 1
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const anguloA = 65;
const anguloB = 100;
const anguloC = 15;

const somaAngulos = anguloA + anguloB + anguloC;

const todosAngulosValidos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosAngulosValidos) {
  if (somaAngulos === 180) {
    // console.log(true);
  } else {
    // console.log(false);
  }
} else {
  // console.log('Deu ruim!');
}

// =================================================

// EXERCÍCIO 2
// Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.  
// Tente fazer utilizando apenas um if.

const num1 = 1;
const num2 = 38;
const num3 = 971;

let par = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  par = true;
};

console.log(par);
