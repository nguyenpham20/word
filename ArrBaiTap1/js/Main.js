var div= document.createElement("div");
var h3=document.createElement("h3");
var p=document.createElement("p");
var button=document.createElement("button");



div.appendChild(h3);
div.appendChild(p);
div.appendChild(button);

//content
h3.innerText="Hello";
p.innerText="this is ???";
button.innerText="remove";
// style
div.style.background="honeydew";
div.style.textAlign="center";
h3.style.color="blue";
button.style="";

document.body.appendChild(div);

console.log( div);

//button.onclick = ()=> div.removeChild(p);

button.addEventListener("click",()=> div.removeChild(p))


var btnResult= document.querySelector("div#ex1 botton.js-btn-result")
btnResult.addEventListener("click",()=>{
  RunPro();
});

function RunPro(){
  var inputNumber= document.querySelector("div#ex1 input.js-input")
  var value = Number(inputNumber.value);
  if (isNaN(value)) {
    alert("nhap so");
  }
  else{

  printValue(value);

}

}

function printValue (number){
  for (var index = 0; index < number.length; index++) {
    var p = document.createElement("p")
    p.innerText= i+1;
    div.appendChild(p);
  }
}
function removepre(){

  
}