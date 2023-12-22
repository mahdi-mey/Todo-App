const $ = document
const inputElement  = $.querySelector('.form-control')
const formElement   = $.querySelector('.add')
const parentElement = $.querySelector('.todo-container')
const userInput     = $.querySelector('#user-input')
const clearBtn      = $.querySelector('.userBtn')

function addNewTodo(title){
    console.log(title);
}

inputElement.addEventListener('keydown', (event) => {
    let newTodoValue = inputElement.value

    if (event.keyCode === 13){
        addNewTodo(newTodoValue)
        inputElement.value = ''
    }
})