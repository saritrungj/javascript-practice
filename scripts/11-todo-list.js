const todoList = [
  {
    name: 'make dinner',
    dueDate: '2024-02-10'
  },
  {
    name: 'wash dishes',
    dueDate: '2024-02-10'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
      `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    // shortcut property >>
    name,
    dueDate
  });
  console.log(todoList);

  nameInputElement.value = '';
  renderTodoList();
}



