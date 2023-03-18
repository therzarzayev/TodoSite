const addForm = document.querySelector('.add');
const addInput = document.querySelector('#addInput');
const todos = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="todo-content">${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    todos.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    let todo = addInput.value.trim();
    e.preventDefault()
    if(todo.length){
        generateTemplate(todo)
        addForm.reset()
    }
})

todos.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})