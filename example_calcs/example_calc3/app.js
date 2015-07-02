
var memory="";
var operator="";
//var display = document.querySelector('.message');
var numberButtons = document.querySelectorAll('.numberButtons');

var clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',clearDisplay);

var plusButton = document.getElementById('add');
plusButton.addEventListener('click', addOperator);

var subtractButton = document.getElementById('sub');
subtractButton.addEventListener('click',subtractOperator);

var multiplyButton = document.getElementById('mult');
multiplyButton.addEventListener('click', multiplyOperator);

var divideButton = document.getElementById('div');
divideButton.addEventListener('click', divideOperator);

var equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click',calculate);

var display = document.querySelector('.message');

for(var i=0;i <numberButtons.length; i+=1){
  numberButtons[i].addEventListener('click',getDisplay);
}

function getDisplay(){
  display.innerText = display.innerText + this.innerText;
}

function clearDisplay(){
  //console.log('test');
  display.innerHTML = "";
}

function addOperator(){
  console.log(display);
  memory = Number(display.innerText);
  //console.log(memory);
  operator = add;
  display.innerText = "";
}

function subtractOperator(){
  console.log(display);
  memory = display.innerText;
  console.log(memory);
  operator = subtract;
  display.innerText = "";
}

function multiplyOperator(){
  console.log(display);
  memory = display.innerText;
  console.log(memory);
  operator = multiply;
  display.innerText = "";
}

function divideOperator(){
  console.log(display);
  memory = display.innerText;
  console.log(memory);
  operator = subtract;
  display.innerText = "";
}

function add (a,b){
  return a + b;
}

function subtract (a,b){
  return a - b;
}

function divide (a,b){
  return a / b;
}

function multiply (a,b){
  return a * b;
}

function calculate(){
  var memoryTwo = Number(display.innerHTML);
  //console.log(memory);
  //console.log(operator);
  //console.log(memoryTwo);
  var result = operator(memory,memoryTwo);
  display.innerText = result;
  console.log(result);
}
