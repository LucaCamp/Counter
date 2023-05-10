let counter = 0
let number = document.getElementById("number");

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