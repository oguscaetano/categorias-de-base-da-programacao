// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

const pecaXadrez = 'Cavalo';

switch (pecaXadrez) {
  case 'Cavalo':
    console.log('Cavalo -> Faz o L');
    break;
  case 'Rainha':
    console.log('Rainha -> Anda quantas casas quiser em qualquer direção');
    break;
  case 'Rei':
    console.log('Rei -> Anda uma casa em qualquer direção');
    break;
  case 'Bispo':
    console.log('Bispo -> Anda quantas casas quiser na diagonal');
    break;
  case 'Peão':
    console.log('Peão -> Anda uma casa para frente. No primeiro movimento ele pode andar duas');
    break;
  case 'Torre':
    console.log('Torre -> Anda quantas casas quiser na vertical ou horizontal');
    break;
  default:
    console.log('Peça inválida!');
    break;
};