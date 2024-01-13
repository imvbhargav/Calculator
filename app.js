/*----------------------------------------------------------------------------------------------------------
Project:  Simple Calculator

Aim:  1. To complete project for freeCodeCamp's Front End Development Libraries certification
      2. The Odin Project's calculator project

Author: Bhargav V   -- https://github.com/imvbhargav
                    -- https://linkedin.com/in/imvbhargav

Date of completion: 13 January 2024
----------------------------------------------------------------------------------------------------------*/

// Handle keyboard value entry
document.getElementById("bodyID").addEventListener("keyup", (e) => {
  if (isOperator(e.key) || /\d/.test(e.key)){
    put(e.key)
  }
  if (e.key === "Backspace"){
    clearEventHandle()
  }
  if (e.key === "=" || e.key === "Enter"){
    equalsHandler()
  }
})
// Flags and variables required for display and calculation
let previousEnableDecimal = true, previousinitialNum = true, previousAfterOperator = false;
let enableDecimal = true, intialNum = true, afterOperator = false;

// Flags, Arrays and variables required for calculation only
let numberArray = []
let operatorArray = []
let numString = ""
let precedenceOperatorIndexs = []
let isBeginning = true;

// Check if the operator is precedence operator ie "*" or "/"
const isPrecedenceOperator = (operator) => {
  return operator === "*" || operator === "/";
}

// Handle the input value to assign to proper arrays
const handleInputValues = (inputValue) => {
  let lastValue = getLastValueOf(ds.value)

  // If there is no number input then accept "-" as negative sign
  if (isBeginning && inputValue === "-"){
    numString += inputValue
    isBeginning = false
    return;
  } 
  
  // If other numbers is inputted then set isBeginning to false to avoid negative sign
  else if (isBeginning){
    isBeginning = false
  }

  // If input value is operator and last value is not, then
  // 1. Assign numString to numberArray if numString is not empty
  // 2. Assign the input value to operatorArray
  if (isOperator(inputValue) && !isOperator(lastValue)){
    if (numString !== ""){
      numberArray.push(parseFloat(numString))
    }
    operatorArray.push(inputValue)
    numString = ""
    if (isPrecedenceOperator(inputValue)){
      precedenceOperatorIndexs.push(operatorArray.length - 1)
    }
  }

  // If inputValue is number then append it to numString
  else if(!isOperator(inputValue) || inputValue === "-"){
    numString += inputValue
  }
}

// Evaluate the equation using the arrays
const evaluateEquation = () => {
  let result;
  let loopCounter = 0;

  // Calculate the operators with precedence first
  for (let oprIndex of precedenceOperatorIndexs){
    oprIndex -= loopCounter
    switch (operatorArray[oprIndex]){
      case "*":
        result = numberArray[oprIndex] * numberArray[oprIndex+1]
        break;
      case "/":
        result = numberArray[oprIndex] / numberArray[oprIndex+1]
        break;
    }

    numberArray.splice(oprIndex, 2, result);
    operatorArray.splice(oprIndex, 1);
    loopCounter += 1
  }

  // Evaluate the remaining operators
  loopCounter = 0;
  while (operatorArray.length !== 0){
    switch (operatorArray[0]){
      case "+":
        result = numberArray[0] + numberArray[0+1]
        break;
      case "-":
        result = numberArray[0] - numberArray[0+1]
        break;
    }

    numberArray.splice(0, 2, result);
    operatorArray.splice(0, 1);
    loopCounter += 1
  }
  return numberArray[0]
}


/*------Check if input value is operator------*/
const isOperator = (val) => {
  return val === "+" || val === "-" || val === "*" || val === "/";
}

/*------Get the last value of display screen------*/
const getLastValueOf = (value) => {
  return value.charAt(value.length - 1);
}

/*------Get the second last value of display screen------*/
const getSecondLastValueOf = (value) => {
  return value.charAt(value.length - 2);
}

/*------Display Screen------*/
var ds=document.getElementById('display');
function put(nom){

  // If input is "." and enableDecimal is false then skip operation
  if (nom === "." && !enableDecimal){
    return;
  }

  // If input is "0" and it is the first number then don't allow leading zeros
  if (nom === "0"){
    let lastValue = getLastValueOf(ds.value)
    if (intialNum && !afterOperator || intialNum && lastValue === "0"){
      return;
    }
  }

  // If input is not Zero then allow input and set corresponding flags
  else if (!afterOperator && intialNum && nom != "0" && !isOperator(nom)){
    handleInputValues(nom)
    ds.value = nom;
    previousinitialNum = intialNum;
    intialNum = false;
    return;
  }

  // If input is not zero or operator and input is after operator and initial input then
  // 1. If last value is 0 and not "." then remove zero and append the number
  else if (afterOperator && intialNum && nom != "0" && !isOperator(nom)){
    handleInputValues(nom)
    if (getLastValueOf(ds.value) === "0" && nom !== "."){
      ds.value = ds.value.slice(0, -1);
      numString = numString.slice(1)
    }
    ds.value += nom;
    previousinitialNum = intialNum;
    intialNum = false;
    return;
  }

  // If input is operator and it is "-" then,
  // 1. If last value and last second value is "-" then,
  // => don't allow the operation
  // 2. If both last and second last value is operator then,
  // => Remove previous operator and "-" from number and assign new operator
  if (isOperator(nom)){
    if (nom === "-"){
      let lastValue = getLastValueOf(ds.value)
      let secondLastValue = getSecondLastValueOf(ds.value)
      if (isOperator(secondLastValue) && lastValue === "-"){
        return;
      }
      if (isOperator(lastValue) && isOperator(secondLastValue)){
        numString = numString.slice(1)
        let popped = operatorArray.pop()
        if (isPrecedenceOperator(popped)){
          precedenceOperatorIndexs.pop()
        }
        ds.value = ds.value.slice(0, -2);
      }
    }

    // If input value is not "-" then,
    // 1. If last value is "-" then,
    // => If last and second last value is operator then,
    // => Remove operator and "-" from number
    else{
      let lastValue = getLastValueOf(ds.value)
      if (lastValue === "-") {
        let secondLastValue = getSecondLastValueOf(ds.value)
        if (isOperator(lastValue) && isOperator(secondLastValue)){
          numString = numString.slice(1)
          let popped = operatorArray.pop()
          if (isPrecedenceOperator(popped)){
            precedenceOperatorIndexs.pop()
          }
          ds.value = ds.value.slice(0, -2);
        }

        // Else remove only the operator as number is empty
        else{
          let popped = operatorArray.pop()
          if (isPrecedenceOperator(popped)){
            precedenceOperatorIndexs.pop()
          }
          ds.value = ds.value.slice(0, -1);
        }
      }

      // If last value is operator then 
      // => remove last value and add new operator
      else if (isOperator(lastValue)){
        let popped = operatorArray.pop()
          if (isPrecedenceOperator(popped)){
            precedenceOperatorIndexs.pop()
          }
        ds.value = ds.value.slice(0, -1);
      }
    }
    previousAfterOperator = afterOperator;
    previousEnableDecimal = enableDecimal;
    previousinitialNum = intialNum;
    enableDecimal = true;
    intialNum = true;
    afterOperator = true;
  }
    
  // If input value is decimal then add decimal and
  // => set enableDecimal flag to false 
  else if (nom === "."){
    previousEnableDecimal = enableDecimal;
    enableDecimal = false;
  }
  
  handleInputValues(nom) 
  ds.value+=nom;
}

// Handle the functinality of clear button
const handleClearForCalculation = () => {
  // If both last and second last value is operator then,
  // 1. Remove last value of numString
  if (isOperator(getSecondLastValueOf(ds.value)) && isOperator(getLastValueOf(ds.value))){
    numString = numString.slice(0, numString.length-1);
  }

  // If last value is not operator then remove last value of numString
  else if (!isOperator(getLastValueOf(ds.value))){
    numString = numString.slice(0, numString.length-1);
  }

  // If last value is operator and above conditions not met then,
  // 1. Pop value from operator array,
  // => If popped value is of precedence then pop from precedenceOperatorIndexs
  // 2. pop from numberArray and assign to numString
  else if (isOperator((getLastValueOf(ds.value)))){
    let popped = operatorArray.pop()
    if (isPrecedenceOperator(popped)){
      precedenceOperatorIndexs.pop()
    }
    intialNum = false
    numString = numberArray.pop().toString()
  }
  
}

// Function to handle clear functionality flags
function clearEventHandle() {
  var str = ds.value;
  afterOperator = previousAfterOperator;
  enableDecimal = previousEnableDecimal;
  handleClearForCalculation()
  ds.value = str.slice(0, str.length-1);
  if (ds.value == ''){
    isBeginning = true;
    intialNum = true;
    ds.value = "0";
  }
}

/*------The Clear Button------*/
document.getElementById("remove").addEventListener("click", clearEventHandle);



/*------The All Clear Button------*/
document.getElementById("clear").addEventListener("click",function(){
        numString = ""
        numberArray = []
        operatorArray = []
        precedenceOperatorIndexs = []
        enableDecimal = true;
        intialNum = true;
        isBeginning = true;
        afterOperator = false;
        ds.value = 0;
})

// Handles event of equals
function equalsHandler(){
  if (numString !== ""){
    numberArray.push(parseFloat(numString))
    numString = "";
  }
  let result = evaluateEquation();
  ds.value = result
  numString = result.toString()
  numberArray = []
  operatorArray = []
  precedenceOperatorIndexs = []
  if (result === 0){
    intialNum = true;
  }
}

/*------The Equals Button------*/
document.getElementById("equals").addEventListener("click", equalsHandler)



/*------mode change------*/
var bcol=2;
function modechange(){
  if (bcol==2){
    document.body.style.background = "#fff";
    mode=document.getElementById('mode');
    mode.innerHTML = "Dark Mode";
    mode.style.background = "#000";
    mode.style.color = "#fff";
    ds.style.background = "#a2a2a2";
    ds.style.color = "#000";
    bcol=3;
  }
  else{
    document.body.style.background = "#000";
    mode=document.getElementById('mode');
    mode.innerHTML = "Light Mode";
    mode.style.background = "#fff";
    mode.style.color = "#000";
    ds.style.background = "#303030";
    ds.style.color = "#fff";
    bcol=2;
  }
  
}
