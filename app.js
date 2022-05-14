// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listeners
todoButton.addEventListener('click', addTodo);

// functions

function addTodo(event) {

    // prevent form from submitting

    event.preventDefault();

    // todo div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create li

    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check mark button

    const completedButton = document.createElement('button');
        
}