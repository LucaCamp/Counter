let counter = 0
let number = document.getElementById("number");

function add(){
 counter++;
 number.innerHTML = counter;
}

function subtract (){
  counter--;
  number.innerHTML = counter;}

function reset(){
  counter = 0;
  number.innerHTML = counter;}

function add100(){
  counter = counter + 100;
  number.innerHTML = counter;}

function subtract100(){
  counter = counter - 100;
  number.innerHTML = counter;}

function randomNumber(){
 let min = -100000;
  let max = 1000000;
  counter = Math.floor(Math.random()*(max - min + 1)) + min;
  number.innerHTML = counter;
}