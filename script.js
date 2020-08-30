const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function addTodo() {
  agregarElementos();
  actualizarContadores();
}

function agregarElementos(){
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.className=classNames.TODO_ITEM;
  span.innerText="Tarea " + (parseInt(itemCountSpan.innerText)+1);
  let ck = document.createElement("input");
  ck.type="checkbox";
  ck.addEventListener('change',calcularContadores);
  span.className=classNames.TODO_CHECKBOX;

  li.appendChild(ck);
  li.appendChild(span);
  list.appendChild(li);
}

function actualizarContadores (){

  let contadorTotal=document.getElementById('item-count');
  contadorTotal.innerText=parseInt(contadorTotal.innerText)+1;

  let contadorUncheck=document.getElementById('unchecked-count');
  contadorUncheck.innerText=parseInt(contadorUncheck.innerText)+1;
}

function calcularContadores(){
  let cks = document.getElementsByTagName("input");
  let cont = 0;
  for (let i =0; i<cks.length;i++){
    let aux = cks[i];
    if(!aux.checked){
      cont++;
    }
  }
  let contadorUncheck=document.getElementById('unchecked-count');
  contadorUncheck.innerText=cont;
}