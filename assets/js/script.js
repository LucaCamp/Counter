let counter = 0
let number = document.getElementById("number");

const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
const buttonReset = document.getElementById("reset");
const buttonMinus100= document.getElementById("minus100");
const buttonPlus100 = document.getElementById("plus100");
const buttonRandom = document.getElementById("random");

function updateCounter (){
  number.innerHTML = counter;
}

function add(){
  counter++;
  updateCounter();
 }

 function subtract (){
  counter--;
  updateCounter();
}
function reset(){
  counter = 0;
  updateCounter();
}
function add100(){
  counter = counter + 100;
  updateCounter();
}

function subtract100(){
  counter = counter - 100;
  updateCounter();
}
function randomNumber(){
  let min = -100000;
  let max = +100000;
  counter = Math.floor(Math.random()*(max - min + 1)) + min;
  updateCounter();
}


buttonPlus.addEventListener("click", add);

buttonMinus.addEventListener("click", subtract);

buttonReset.addEventListener("click", reset);

buttonMinus100.addEventListener("click", subtract100);

buttonPlus100.addEventListener("click", add100);

buttonRandom.addEventListener("click",randomNumber);