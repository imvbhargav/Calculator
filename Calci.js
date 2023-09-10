  let op = 0;
  let opr = '';


/*------Display Screen------*/
var ds=document.getElementById('display-screen');
function put(nom){
  if (typeof nom == "number"){
    op += nom
  }
  if (typeof nom == "string" && op != 0){
    ds.value = ds.value + op + opr;
    op = 0;
    opr = '';
  }
  scroll();
}



/*------The Clear Button------*/
document.getElementById("clear").addEventListener("click", function() {
        var str = ds.value;
        ds.value = str.slice(0, str.length-1);
        scroll();
    });



/*------The All Clear Button------*/
document.getElementById("ac").addEventListener("click",function(){
        ds.value = null;
        scroll();
})



/*------The Equals Button------*/
document.getElementById("equal").addEventListener("click",function(){
        ds.value = eval(ds.value);
        scroll();
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



/*------Font Size Change On Overflow of Input------*/
function scroll(){
    if(ds.value.length<=15){
      ds.style.fontSize = "30px";
    }
    if(ds.value.length>15){
      ds.style.fontSize = "20px";
    }
    if(ds.value.length>24){
      ds.style.fontSize = "10px";
    }
    if (ds.value.length>33){
      ds.style.fontSize = "5px";
    }
}
