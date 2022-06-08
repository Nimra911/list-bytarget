const form = document.getElementById("formData");
 console.log(form);
const inputField = document.getElementById("input");
console.log(inputField);
const addBtn = document.getElementById("addBtn");
console.log(addBtn);
// const saveBtn = document.getElementsByClassName("saveBtn");
console.log('button is here'+saveBtn);
// eventlistener for add button
 addBtn.addEventListener('click', function(e)
{

  
const ul = document.getElementById("list");
let listValue = inputField.value;
const li = document.createElement("li");
li.className = 'items';
li.innerText = listValue;
const divSpan = document.createElement("div");
divSpan.className = 'spanbutton';
const editSpan =  document.createElement("span");
const iconEdit = document.createElement("i");
iconEdit.className = 'fa fa-edit';
iconEdit.addClass = 'edit';
const delSpan =  document.createElement("span");
const iconDel = document.createElement("i");
iconDel.className = 'fa fa-remove';
iconDel.addClass = 'remove';
ul.appendChild(li);
li.appendChild(divSpan);
divSpan.appendChild(editSpan);
editSpan.appendChild(iconEdit);
divSpan.appendChild(delSpan);
delSpan.appendChild(iconDel);
inputField.value = '';
// eventlistener for delete button
iconDel.addEventListener('click', (e) => {
var items = e.target;
    let parent1 = items.parentElement;
    let parent2 = parent1.parentElement;
    let parent3 = parent2.parentElement;
    console.log(parent3);
    parent3.style.display = 'none';
}
 );
 // eventlistener for edit button
 iconEdit.addEventListener('click', (e) => {
    var items = e.target;
    let parent1 = items.parentElement;
    let parent2 = parent1.parentElement;
    let parent3 = parent2.parentElement;
    parent3.setAttribute('id','new') ;
    // parent3.style.display = 'none';
    let editValue = parent3.innerText;
    inputField.value = editValue;

  }

);
 
}

);