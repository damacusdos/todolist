let addBtn = document.getElementById("addBtn");
let selectAllBtn = document.getElementById("selectAllBtn");
let completeBtn = document.getElementById("completeBtn");
let deleteBtn = document.getElementById("deleteBtn");


let taskList = document.querySelector('#to-do');
let doneList = document.querySelector('#done');
let input = document.getElementById("user-input");
let list = [];


const btn = {
addTask: function() {
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
},

completeHandler: function() {
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
},

deleteHandler: function() {
  let deletedTask = document.querySelectorAll('.done');
  for(let i = 0; i < deletedTask.length; i++) {
    let task = deletedTask[i].childNodes[0];
    if(task.checked) {
      doneList.removeChild(deletedTask[i]);
    }
  }
},

selectAllHandler: function() {
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
}



addBtn.addEventListener('click', btn.addTask);
completeBtn.addEventListener('click', btn.completeHandler);
deleteBtn.addEventListener('click', btn.deleteHandler);
selectAllBtn.addEventListener('click', btn.selectAllHandler);