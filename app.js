//storage use for values
var memory=""; //for integers
var operator=""; // for operators +-/*=

                               //////////////////////////////Buttons(numbers) Section

 //declares var 'buttons' to array class '.buttons'
 var buttons = document.querySelectorAll('.buttons');

 //declares var inputValue to class '.input' (the value display area)
 var inputValue=document.querySelector('.input')

//for loop to count through variable buttons, 11 in array [].
 for(var i = 0; i < buttons.length; i++){
//listens for a click for each element with class=buttons
 buttons[i].addEventListener('click',logMe)
 }
 // logMe() to display clicked button value to input display
 function logMe(){
  inputValue.value=inputValue.value+this.id; //this.innerText can be used too
} //+this.id considers multi digits instead of replacing it with each click
// this refers to button pressed


/////////function list associations////////////////////////
//////////          ADD            ///////////////////////////////////////////
function addOperator(){
  console.log(inputValue);    // puts console message that '+' was clicked
  memory =Number(inputValue.value); // stores Number into memory
  //console.log(memory);
  operator = add; // for 'add' call back function
  inputValue.value = "";    // for display
}

function add (a,b){ // callback 'add' for (memory, memoryTwo) values
  return a + b;
}

var plusButton = document.getElementById('add'); //declares 'plusButton' to be the the event listener
//must use 'getElementById' and not 'querySelectorAll'
plusButton.addEventListener('click', addOperator); // plusButton event listener for 'click'
///////////////      SUBTRACT             /////////////////////////////////////
function subtractOperator(){
  console.log(inputValue);
  memory = Number(inputValue.value);
  console.log(memory);
  operator = subtract;
  inputValue.value = "";
}

function subtract (a,b){
  return a - b;
}
var subtractButton = document.getElementById('subtract');
subtractButton.addEventListener('click',subtractOperator);
/////////////////////    MULTIPLY   /////////////////////////////
function multiplyOperator(){
  console.log(inputValue);
  memory = Number(inputValue.value);
  console.log(memory);
  operator = multiply;
  inputValue.value = "";
}

function multiply (a,b){
  return a * b;
}

var multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', multiplyOperator);
/////////     DIVIDE    ////////////////////////////////
function divideOperator(){
  console.log(inputValue);
  memory = Number(inputValue.value);
  console.log(memory);
  operator = divide;
  inputValue.value = "";
}

function divide (a,b){
  return a / b;
}

var divideButton = document.getElementById('divide');
divideButton.addEventListener('click', divideOperator);
////////////Reset Button ///////////////////////////////////////////////

var reset = document.querySelector('#reset'); //declares reset button
reset.addEventListener('click', resetCalc); //listen for click on reset button and do resetCalc

function resetCalc(){
  var myReset=document.querySelector('.input'); // sets input field to myReset
   myReset.value=""; // from querySelector console.dir(document.querySelector('.input'))
  };

  /////////          CALCULATE         //////////////////
  function calculate(){
  var memoryTwo =Number(inputValue.value);         //declares memoryTwo to take in 2nd integer
  //console.log(memory);
  //console.log(operator);
  //console.log(memoryTwo);
  var result = operator(memory,memoryTwo); //declares result to be for operator to use (memory,memoryTwo)=(a,b)
  inputValue.value = result;               // output result to display
  console.log(result);
}

var equalsButton = document.getElementById('equals'); // equalsButton click listener
equalsButton.addEventListener('click',calculate); // at click init calculate()
