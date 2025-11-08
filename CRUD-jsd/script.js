
let empid = document.getElementById('empid');
let name = document.getElementById('name');
let age = document.getElementById('age');
let job = document.getElementById('job');
let exp = document.getElementById('exp');
let ref = document.getElementById('ref');

let add = document.getElementById('add');
let del = document.getElementById('del');
let upt = document.getElementById('upt');
let show = document.getElementById('show');

let output = document.getElementById('op');


let employees = JSON.parse(localStorage.getItem('employees')) || [];

function displayEmployees() {
 output.innerHTML = "";
  for (let emp of employees) {
    for (let key in emp) {
      output.innerHTML += `<br> <strong>${key}: </strong> 
        ${emp[key]}`;
    }
    output.innerHTML += "<hr>";
  }
}

add.addEventListener('click',()=>{
let employee ={
  Empid :empid.value,
  Name : name.value,
  Age:age.value,
  Job:job.value,
  Exp:exp.value,
  Ref:ref.value
}
output.innerHTML = "";
employees.push(employee);

  localStorage.setItem('employees', JSON.stringify(employees));

alert("employee added");
  empid.value = name.value = age.value = job.value = exp.value = ref.value = "";
})



del.addEventListener('click',()=>{
  let IdtoDelete = prompt("enter the id");
 let  NametoDelete = prompt("enter the name ");
let index = employees.findIndex(emp => emp.empid === IdtoDelete || emp.name === NametoDelete);

if(index !== -1 ){
  employees.splice(index,1);
 alert(`This ${IdtoDelete} or ${NametoDelete} deleted in detail`);
}else
   alert(`This ${IdtoDelete} or ${NametoDelete} not exist  in detail`)

    localStorage.setItem('employees', JSON.stringify(employees));

displayEmployees();
})

upt.addEventListener('click',()=>{
  let IdtoDelete = prompt("enter the id");
let index =employees.findIndex(emp => emp.empid ===IdtoDelete )
if(index !== -1){
    employees[index].name = prompt("Enter new name", employees[index].name);
    employees[index].job  = prompt("Enter new job", employees[index].job);
    employees[index].exp  = prompt("Enter new experience", employees[index].exp);
    employees[index].ref  = prompt("Enter new reference", employees[index].ref);
    alert("employees detail updtated");

    localStorage.setItem('employees', JSON.stringify(employees));

  displayEmployees();
}else 
alert(`employee ${index} not found in detail`);


})

show.addEventListener('click',()=>{
displayEmployees();
})

(function() {
  displayEmployees();
})();


