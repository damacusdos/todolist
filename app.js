const addTasks = document.querySelector('.add-tasks');
const selectAllBtn = document.getElementById('selectAllBtn');
const completeBtn = document.getElementById('completeBtn');
const deleteBtn = document.getElementById('deleteBtn');


let taskList = document.querySelector('#to-do');
let doneList = document.querySelector('#done');

const todoTasks = [];
const completeTasks = [];


function addTask(e) {
  e.preventDefault();

  let text = (this.querySelector('[name=item]')).value;
  let item = {
    text,
    done: false,
  }
  if(text == '') return;
  todoTasks.push(item);
  displayItem(todoTasks, taskList);
  this.reset();
}

function displayItem(tasks = [], tasksList) {
  tasksList.innerHTML = tasks.map((task, i) => {
    return `<li>
      <input type="checkbox" data-index=${i} id=item${i} ${task.done ? 'checked' : ''}>
      <label for=item${i}>${task.text}</label>
    </li>`
  }).join('');
}

function toggleHandler(e) {

}

function completeHandler() {
  let completeTasks = todoTasks.filter(task => task.done == true);
  let listUpdate = todoTasks.filter(task => task.done == false);
  displayItem(completeTasks, doneList);
  displayItem(listUpdate, taskList);
  
  

  // doneList.querySelectorAll('input').forEach( input => input.checked = !input.checked);
  
  // let selectTask = document.querySelectorAll('li');
  // let rm = [];
  // for(let i = 0; i < selectTask.length; i++) {
  //   let task = selectTask[i].childNodes[0];
  //   if(task.checked) {
  //     rm.push(i);
  //     doneList.appendChild(selectTask[i]);
  //     task.checked = false;
  //     selectTask[i].setAttribute('class', 'done');
  //   }
  // }
  // while(rm.length) {
  //   list.splice(rm.pop(),1)
  // }
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


addTasks.addEventListener('submit', addTask);

taskList.addEventListener('click', toggleHandler);
doneList.addEventListener('click', toggleHandler);

completeBtn.addEventListener('click', completeHandler);
deleteBtn.addEventListener('click', deleteHandler);
selectAllBtn.addEventListener('click', selectAllHandler);
