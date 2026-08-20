let screen = document.getElementById("screen");
let history = document.getElementById("history");

function press(value){

if(screen.value=="0")
screen.value=value;

else
screen.value+=value;

}

function clearScreen(){

screen.value="0";
history.innerHTML="";

}

function scientific(func){

if(func=="pi"){

press(Math.PI);

return;

}

press(func);

}

function calculate(){

try{

history.innerHTML=screen.value;

let expression=screen.value;

expression=expression.replace(/\^/g,"**");

expression=expression.replace(/sqrt/g,"Math.sqrt");
expression=expression.replace(/sin/g,"Math.sin");
expression=expression.replace(/cos/g,"Math.cos");
expression=expression.replace(/tan/g,"Math.tan");
expression=expression.replace(/log/g,"Math.log10");
expression=expression.replace(/ln/g,"Math.log");

screen.value=eval(expression);

}

catch{

screen.value="Error";

}

}

document.addEventListener("keydown",(e)=>{

const key=e.key;

if("0123456789+-*/().".includes(key))
press(key);

if(key==="Enter")
calculate();

if(key==="Backspace")
screen.value=screen.value.slice(0,-1)||"0";

if(key==="Escape")
clearScreen();

});