const taskInput = document.getElementById('taskInput');
const pendingList = document.getElementById('pendingTasks');
const completedList = document.getElementById('completedTasks');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const time = new Date().toLocaleString();

  const taskItem = createTaskElement(taskText, time);
  pendingList.appendChild(taskItem);
  taskInput.value = '';
}

function createTaskElement(text, time, isCompleted = false) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const info = document.createElement('div');
  info.className = 'task-info';
  info.innerHTML = `<strong>${text}</strong><br><span class="timestamp">Added: ${time}</span>`;

  const buttons = document.createElement('div');
  buttons.className = 'task-buttons';

  if (!isCompleted) {
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = '✔';
    completeBtn.onclick = () => markAsCompleted(li, text);
    buttons.appendChild(completeBtn);
  }

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = '✏️';
  editBtn.onclick = () => editTask(li, text);
  buttons.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '🗑️';
  deleteBtn.onclick = () => li.remove();
  buttons.appendChild(deleteBtn);

  li.appendChild(info);
  li.appendChild(buttons);

  return li;
}

function markAsCompleted(taskElement, taskText) {
  const time = new Date().toLocaleString();
  const completedTask = createTaskElement(taskText, time, true);
  completedList.appendChild(completedTask);
  taskElement.remove();
}

function editTask(taskElement, oldText) {
  const newText = prompt("Edit your task:", oldText);
  if (newText && newText.trim() !== '') {
    const timestamp = new Date().toLocaleString();
    const isCompleted = taskElement.parentNode.id === 'completedTasks';
    const updatedTask = createTaskElement(newText.trim(), timestamp, isCompleted);
    taskElement.replaceWith(updatedTask);
  }
}
