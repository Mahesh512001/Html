

const btn = document.getElementById('btn');
btn.addEventListener('click', getbill );


	if(btn.disabled){
		btn.style.background="red";
	}
	

function toggle(){
let ItemName =  document.getElementById('iname').value;
	 let qty = document.getElementById('qty').value;
	 let tip =  document.getElementById('tip').value;

const btn = document.getElementById('btn');
if(ItemName && qty){
	btn.disabled = false;
		btn.style.background="blue";
}else
	btn.disabled= true;

}

function getbill(){
	

	
	let ele = document.querySelector('.output')
	ele.style.visibility = 'visible';
	
	let ItemName =  document.getElementById('iname').value;
	 let qty = +document.getElementById('qty').value;
	 let tip =  +document.getElementById('tip').value;
	let totamt
		let itemprice= 100;
	const gst = (itemprice*qty)*18/100


	totamt = itemprice*qty + gst + tip;
	let ototal =  document.getElementById('total');
	let oname =  document.getElementById('itename');
	let ogst =  document.getElementById('GST');
	let oprice =  document.getElementById('iprice');
	let otip =  document.getElementById('tipamt');
	
	
oname.innerHTML = `Item  :  ${ItemName}`;
ototal.innerHTML = `Total amout is :  ${totamt}`;
ogst.innerHTML= `GST  : ${gst}`;
oprice.innerHTML = `Item price : ${itemprice}`;
otip.innerHTML = `Tip by you  : ${tip}`;
	
		btn.disabled= true;
		btn.style.background="red";
}
function newbill(){
	
		let ele = document.querySelector('.output')
	ele.style.visibility = 'hidden';
	
	document.getElementById('tip').value='';
	document.getElementById('qty').value='';
	document.getElementById('iname').value='';
}
