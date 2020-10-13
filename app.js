let addBtn = document.getElementById('addBtn');
let selectAllBtn = document.getElementById('selectAllBtn');
let completeBtn = document.getElementById('completeBtn');
let deleteBtn = document.getElementById('deleteBtn');


let taskList = document.querySelector('#to-do');
let doneList = document.querySelector('#done');
let input = document.getElementById('user-input');
let list = [];


function addTask() {
  if(input.value == '') {
    return
  } else {
    list.push(input.value);
  }
  
  taskList.innerHTML='';
   for(let i = 0; i < list.length; i++) {
    let item = document.createElement('li');
    let tickBox = document.createElement('input');
    item.appendChild(tickBox);
    tickBox.type = 'checkbox';
    tickBox.name = 'toggled';
    item.appendChild(document.createTextNode(list[i]));
    taskList.appendChild(item);
    };
  input.value = "";
}

function completeHandler() {
  let selectTask = document.querySelectorAll('li');
  let rm = [];
  for(let i = 0; i < selectTask.length; i++) {
    let task = selectTask[i].childNodes[0];
    if(task.checked) {
      rm.push(i);
      doneList.appendChild(selectTask[i]);
      task.checked = false;
      selectTask[i].setAttribute('class', 'done');
    }
  }
  while(rm.length) {
    list.splice(rm.pop(),1)
  }
}

function deleteHandler() {
  let deletedTask = document.querySelectorAll('.done');
  for(let i = 0; i < deletedTask.length; i++) {
    let task = deletedTask[i].childNodes[0];
    if(task.checked) {
      doneList.removeChild(deletedTask[i]);
    }
  }
}

function selectAllHandler() {
  let deletedTask = document.querySelectorAll('.done');
  let taskAll = 0;
  for(let i = 0; i < deletedTask.length; i++) {
    let task = deletedTask[i].childNodes[0]; 
    if(task.checked) {
        taskAll++;
      }
    }

  if(taskAll === deletedTask.length) {
      for(let i = 0; i < deletedTask.length; i++) {
        let task = deletedTask[i].childNodes[0];
        task.checked = false;
      }
    } else {
      for(let i = 0; i < deletedTask.length; i++) {
        let task = deletedTask[i].childNodes[0];    
        task.checked = true;
      }
    }
  }


addBtn.addEventListener('click', addTask);
completeBtn.addEventListener('click', completeHandler);
deleteBtn.addEventListener('click', deleteHandler);
selectAllBtn.addEventListener('click', selectAllHandler);
