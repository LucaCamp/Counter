
//create counter div

let counterDiv = document.createElement("div");
document.getElementById("number-container").appendChild(counterDiv);

let counter = 0

counterDiv.innerHTML = counter ;
counterDiv.classList.add("number" , "text-danger") ;


//create buttons 


let minusBtn = document.createElement("button");
document.getElementById("btnRow1").appendChild(minusBtn);
minusBtn.classList.add("btn","btn-lg" ,"btn-success");
minusBtn.id = "minusBtn";
minusBtn.innerHTML = "-1"

 let resetBtn = document.createElement ("button");
document.getElementById("btnRow1").appendChild(resetBtn);
resetBtn.classList.add("btn","btn-lg" ,"btn-success");
 resetBtn.id = "reset";
resetBtn.innerHTML = "reset"

let plusBtn = document.createElement ("button");
document.getElementById ("btnRow1").appendChild(plusBtn);
plusBtn.classList.add("btn","btn-lg" ,"btn-success");
plusBtn.id = "plus";
plusBtn.innerHTML = "+1"


let minus100Btn = document.createElement ("button");
 document.getElementById ("btnRow2").appendChild(minus100Btn);
 minus100Btn.classList.add("btn","btn-lg" ,"btn-success");
minus100Btn.id = "plus";
 minus100Btn.innerHTML = "-100"

 let randomBtn = document.createElement ("button");
 document.getElementById ("btnRow2").appendChild(randomBtn);
randomBtn.classList.add("btn","btn-lg" ,"btn-success");
randomBtn.id = "random";
random.innerHTML = "random"

 let plus100Btn = document.createElement ("button");
 document.getElementById ("btnRow2").appendChild(plus100Btn);
plus100Btn.classList.add("btn","btn-lg" ,"btn-success");
plus100Btn.id = "plus100";
plus100Btn.innerHTML = "+100"



//event listener Click
//Event delegation

let buttons = document.querySelector(".buttons");

buttons.addEventListener ("click", function(event) {
  if (event.target.tagName === "BUTTON") {
     switch (event.target) {
      case plusBtn: 
      add();
      break;

      case minusBtn: 
      subtract();
      break;

      case resetBtn: 
      reset();
      break;

      case minus100Btn: 
      subtract100();
      break;

      case plus100Btn: 
      add100();
      break;
      
      case randomBtn: 
      randomNumber();
      break;
     }
  }
})

//function for buttons

function updateCounter (){
  counterDiv.innerHTML = counter;
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


