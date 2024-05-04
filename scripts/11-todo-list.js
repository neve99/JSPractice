let todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const renderElem = document.querySelector('.js-list');
    let todo = todoList[i];
    todoListHTML += `<p>${todo}</p>`;
  }
  document.querySelector('.js-list').innerHTML = todoListHTML;
}

function addTodo() {
  const todoElem = document.querySelector('.js-todo');
  let todo = todoElem.value;
  todoList.push(todo);
  todoElem.value = '';
  renderTodoList();
}

