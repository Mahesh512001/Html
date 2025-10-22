

function toggle(){
let roll = document.getElementById("rno").value;
let name = document.getElementById("sna").value;
let html = document.getElementById("htm").value;
let CSS = document.getElementById("css").value;
let Javascript = document.getElementById("js").value;
let Bootstrap = document.getElementById("bs").value;

const submitBtn = document.getElementById("submit");
if(roll && name && html && CSS && Javascript && Bootstrap){
	submitBtn.disabled = false;
}else
	submitBtn.disabled= true;

}




function getResult(){
let total , avg , grade;
let html = +document.getElementById("htm").value;
let CSS = +document.getElementById("css").value;
let Javascript = +document.getElementById("js").value;
let Bootstrap = +document.getElementById("bs").value;

total = html + CSS + Javascript + Bootstrap;
avg= total/4;

if(html>39 && CSS>39 && Javascript>39 && Bootstrap>39){
grade=(avg>90)?"A+":(avg>85)?"A":(avg>80)?"B+":(avg>75)?"B":(avg>70)?"C":"D";

}else
grade = "fail";

document.getElementById("average").innerText = `Average : ` + avg;
document.getElementById("grd").innerText=`Grade : `+grade;
document.getElementById("tot").innerText = `Total : ` + total;
}