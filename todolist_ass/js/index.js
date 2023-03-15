window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', encodeURI => {
        localStorage.setItem('username', encodeURI.target.value);
       
    })

    newTodoForm.addEventListener('submit', encodeURI => {
        encodeURI.preventDefault();

        const todo = {
            content: encodeURI.target.elements.content.value;
        }
    })


    
})