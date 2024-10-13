let lotteryNumbers = [];
let game = [4, 8, 15, 16, 23, 42];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.ceil(Math.random() * 60);

  if (lotteryNumbers.includes(randomNumber)) {
    index -= 1;
  } else {
    lotteryNumbers.push(randomNumber);
  }

};

let hits = [];
let numberOfHits = 0;

for (let indexGame = 0; indexGame < game.length; indexGame += 1) {
  for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
    if (game[indexGame] === lotteryNumbers[indexLottery]) {
      hits.push(game[indexGame]);
      numberOfHits += 1;
    }
  }
}

console.log(`Fézinha: ${game}
Números sorteados: ${lotteryNumbers}
=================
Número de acertos: ${numberOfHits}
Números acertados: ${hits}`);
