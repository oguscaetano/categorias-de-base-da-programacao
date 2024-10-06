//CSGO - Cálculo de dinheiro

const round = 2; //Entre 1 e 16
let money = 1200;
const killWeapon = 'Knife'; //'Knife', 'AWP', 'Desert Eagle', 'Molotov', 'MP7'. 
const win = true; //false
const howWin = 'Bomb explode'; //'Eliminando', 'Tempo esgotado', 'Bomb has been planted', 'Bomb has been defused', 'Bomb explode'.
const defuseBomb = true; //false
const bombDetonate = false; //true

if (round === 1 || round === 16) { 
  money = 800;
} else if (win === true && (howWin === 'Eliminando' || howWin === 'Tempo esgotado')){
  money += 3250;
} else if (win === true && howWin === 'Bomb has been planted') {
  money += 3550;
} else if (win === true && (howWin === 'Bomb has been defused' || howWin === 'Bomb explode')) {
  money += 3500;
} 

if(round !== 1 && round !== 16) {
  switch (killWeapon) {
    case 'Knife':
      money += 1500;
      break;
    case 'AWP':
      money += 100;
      break;
    case 'Desert Eagle':
      money += 300;
      break;
    case 'Molotov':
      money += 300;
      break;
    case 'MP7':
      money += 600;
      break;
    default:
      console.log('Arma não encontrada.');
      break;
  }  
}


if(money > 16000){
  money = 16000;
}

console.log('Money: $' + money);