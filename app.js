let previousEnableDecimal = true, previousinitialNum = true, previousAfterOperator = false;

let enableDecimal = true, intialNum = true, afterOperator = false;

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
  if (nom === "." && !enableDecimal){
    return;
  }

  if (nom === "0" && intialNum){
    return;
  }
  else if (!afterOperator && intialNum && nom != "0"){
    ds.value = nom;
    previousinitialNum = intialNum;
    intialNum = false;
    return;
  }

  if (isOperator(nom)){
    if (nom === "-"){
      let lastValue = getLastValueOf(ds.value)
      if (lastValue === "-"){
        return;
      }
      let secondLastValue = getSecondLastValueOf(ds.value)
      if (isOperator(lastValue) && isOperator(secondLastValue)){
        ds.value = ds.value.slice(0, -2);
        console.log("INSIDE", ds.value)
      }
    }
    else{
      let lastValue = getLastValueOf(ds.value)
      if (lastValue === "-") {
        let secondLastValue = getSecondLastValueOf(ds.value)
        if (isOperator(lastValue) && isOperator(secondLastValue)){
          ds.value = ds.value.slice(0, -2);
        }
        else{
          ds.value = ds.value.slice(0, -1);
        }
      }
      else if (isOperator(lastValue)){
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
    
  else if (nom === "."){
    previousEnableDecimal = enableDecimal;
    enableDecimal = false;
  }
  ds.value+=nom;
}



/*------The Clear Button------*/
document.getElementById("remove").addEventListener("click", function() {
        var str = ds.value;
        afterOperator = previousAfterOperator;
        enableDecimal = previousEnableDecimal;
        ds.value = str.slice(0, str.length-1);
    });



/*------The All Clear Button------*/
document.getElementById("clear").addEventListener("click",function(){
        enableDecimal = true;
        intialNum = true;
        afterOperator = false;
        ds.value = 0;
})



/*------The Equals Button------*/
document.getElementById("equals").addEventListener("click",function(){
        ds.value = eval(ds.value);
})



/*------mode change------*/
var bcol=2;
function modechange(){
  if (bcol==2){
    document.body.style.background = "#fff";
    mode=document.getElementById('mode');
    mode.innerHTML = "Dark Mode";
    mode.style.background = "#000";
    mode.style.color = "#fff";
    ds.style.background = "#fff";
    ds.style.color = "#000";
    bcol=3;
  }
  else{
    document.body.style.background = "#000";
    mode=document.getElementById('mode');
    mode.innerHTML = "Light Mode";
    mode.style.background = "#fff";
    mode.style.color = "#000";
    ds.style.background = "#000";
    ds.style.color = "#fff";
    bcol=2;
  }
  
}
