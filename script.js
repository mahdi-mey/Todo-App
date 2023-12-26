const $ = document
const inputElement = $.querySelector('.form-control')
const formElement = $.querySelector('.add')
const parentElement = $.querySelector('.todo-container')
const userInput = $.querySelector('#user-input')
const clearBtn = $.querySelector('.userBtn')

let todosArray = []

function addNewTodo(title) {
    let newTodoObj = {
        id: todosArray.length,
        title: title,
    }
    todosArray.push(newTodoObj)
    generateTodo(newTodoObj)
}

function generateTodo(data) {
    let newToDoLi = $.createElement('li');
    newToDoLi.className = 'todo-item';

    let newToDoSpan = $.createElement('span');
    newToDoSpan.innerHTML = data.title;

    let newToDoTrash = $.createElement('i');
    newToDoTrash.className = 'fa fa-trash-o delete';
    newToDoTrash.title = 'Delet item'

    newToDoLi.append(newToDoSpan, newToDoTrash)

    parentElement.append(newToDoLi)
    newToDoTrash.addEventListener('click', removeToDo)
}

function removeToDo() {
    this.parentElement.remove()
}

function removeAllTodos(){
    parentElement.innerHTML = ''
}

inputElement.addEventListener('keydown', (event) => {
    let newTodoValue = inputElement.value

    if (event.keyCode === 13) {
        addNewTodo(newTodoValue)
        inputElement.value = ''
    }
})
clearBtn.addEventListener('click', removeAllTodos)