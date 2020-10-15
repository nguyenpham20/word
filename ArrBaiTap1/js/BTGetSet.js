//get
var BluetButtonColor = document.getElementById("btn-blue");
var REdtButtonColor = document.getElementById("btn-red");
var divblue = document.getElementById("div-color");


// event
BluetButtonColor.addEventListener("click",function(){
    //alert("....");
    blueclick();
   //updateResult(result);
})


function blueclick(){

    divblue.style.bgColor= "blue";
};


// update
/* function updateResult(result){
    divblue.style.color=result;
}
 */
