document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        addTaskToList(task);
        input.value = '';
    }
});

function addTaskToList(task) {
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.addEventListener('click', function() {
        ul.removeChild(li);
    });

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    // Add completed task functionality
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
}