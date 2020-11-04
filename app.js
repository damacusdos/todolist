const selectAllBtn = document.getElementById('selectAllBtn');
const deleteBtn = document.getElementById('deleteBtn');

const addTasks = document.querySelector('.add-tasks');
const taskList = document.querySelector('#task-list');
let list = JSON.parse(localStorage.getItem('items')) || [];


function addTask(e) {
  e.preventDefault();

  let text = (this.querySelector('[name=item]')).value;
  let item = {
    text,
    done: false,
  }
  if(text == '') return;
  list.push(item);
  displayItem(list, taskList);
  localStorage.setItem('items', JSON.stringify(list));
  this.reset();
}

function displayItem(tasks = [], tasksList) {
  if(tasks.length == 0) {
    tasksList.innerHTML = '<li>🙌 Your list is empty! 😎</li>'
  } else {
  tasksList.innerHTML = tasks.map((task, i) => {
    return `<li>
      <input type="checkbox" data-index=${i} id=item${i} ${task.done ? 'checked' : ''}>
      <label for=item${i}>${task.text}</label>
    </li>`
  }).join('');
 }
}

function toggleHandler(e) {
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  list[index].done = !list[index].done;
  localStorage.setItem('items', JSON.stringify(list));
}


function deleteHandler() {
  list = list.filter(item => item.done == false);
  displayItem(list, taskList);
  localStorage.setItem('items', JSON.stringify(list));
}

function selectAllHandler() {
  let taskAll = 0;
  list.forEach(item => {
    if(item.done == true) {
      taskAll++;
    }
  })

  if(taskAll === list.length) {
    list.forEach(item => item.done = false);
    } else {
      list.forEach(item => item.done = true);
    }

    displayItem(list, taskList);
  }


addTasks.addEventListener('submit', addTask);
taskList.addEventListener('click', toggleHandler);

deleteBtn.addEventListener('click', deleteHandler);
selectAllBtn.addEventListener('click', selectAllHandler);

displayItem(list, taskList);