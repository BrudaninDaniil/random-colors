function newColor () {
    let symbols, color;
    symbols = '0123456789ABCDEF';

    color = '#'

    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)]
    }
}
console.log(newColor());


/////////////////////////////////////////////////////////////////////// 

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function randomColor() {
  let letters = 'abcdef';
  let numbers = '0123456789';
  let generatedColor = '#';

  let randomLetter;
  let randomNumber;

  for (let i = 0; i < 6; i++) {
    randomLetter = getRandomInt(0, letters.length - 1);
    randomNumber = getRandomInt(0, numbers.length - 1);
    generatedColor += letters[randomLetter];
    generatedColor += numbers[randomNumber];

  if (getRandomInt(0, 1) == 0) {
      generatedColor += letters[randomLetter];
    } else {
      generatedColor += numbers[randomNumber];
    }
  }

  return generatedColor;
}