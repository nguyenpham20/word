//get
var BluetButtonColor = document.getElementById("js-btn-blue ");
var REdtButtonColor = document.getElementById("js-btn-red ");
var divblue = document.getElementById("div-color");

// event
BluetButtonColor.addEventListener("click",function(){
	// console.log('test');
    blueclick();
})

function blueclick(){
    divblue.style.backgroundColor = 'blue';
};

// update
/* function updateResult(result){
    divblue.style.color=result;
}
 */
