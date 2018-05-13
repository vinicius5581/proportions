const earth = document.getElementById('earth');
const airplane = document.getElementById('airplane');
const person = document.getElementById('person');


const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');


let earthDiameter = 100;
let airplaneAltitude = earthDiameter + (earthDiameter * 0.0009851594569);
let personHeight = earthDiameter + (earthDiameter * 0.0000001483094411);

let counter = 1;
let direction = 'asc';

const updateSizes = (direction) => {
  console.log(direction);
  let multiplier = counter;
  if (direction === 'asc') {
    counter++;
    earthDiameter *= multiplier;
    airplaneAltitude *= multiplier;
    personHeight *= multiplier;
  } else {
    counter--;
    earthDiameter /= multiplier;
    airplaneAltitude /= multiplier;
    personHeight /= multiplier;
  }

  // 
  //
  // earthDiameter *= multiplier;
  // airplaneAltitude *= multiplier;
  // personHeight *= multiplier;

  console.log(earthDiameter);

  earth.style.width = `${earthDiameter}px`;
  earth.style.height = `${earthDiameter}px`;
  airplane.style.width = `${airplaneAltitude}px`;
  airplane.style.height = `${airplaneAltitude}px`;
  person.style.width = `${personHeight}px`;
  person.style.height = `${personHeight}px`;


}


// setInterval(() => {
//   updateSizes();
// }, 1000);

btnPlus.addEventListener('click', () => {
  console.log('asc')
  updateSizes('asc');
});
btnMinus.addEventListener('click', () => {
  console.log('des')
  updateSizes('des');
});
