// get
var firstInput=document.querySelector("div#cal input.js-first-input");
var secodInput=document.querySelector("div#cal input.js-second-input");
var resultInput=document.querySelector("div#cal input.js-input-result");
var operatorSelect=document.querySelector("div#cal select.js-operator");
var resultButton=document.querySelector("div#cal button.js-btn-result");
console.log(firstInput,secodInput,resultInput,operatorSelect,resultInput);
// event
resultButton.addEventListener("click",function(){
    // alert("button click");
    var result=calculate();
    updateResult(result);
});


// logic
function calculate(){
    var firstValue=Number(firstInput.value);
    var secondValue=Number(secodInput.value);
    var operatorSelectvalu = operatorSelect.value;
    var reSult=0;
    switch (operatorSelectvalu) {
        case '+':
            reSult=firstValue+secondValue;
            break;
        case '-':
            reSult=firstValue-secondValue;
            break;
        case '*':
            reSult=firstValue*secondValue;
            break;
        case '/':
            reSult=firstValue/secondValue;
            break;        
        default:
            break;
    }
    
    //console.log("reSult",reSult);
    return reSult;
}
// update
function updateResult(result){
    resultInput.value=result;
}
//updateResult(1000);