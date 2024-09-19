let inputTasks = document.querySelector(".input-tasks");
let addButton = document.querySelector(".add-btn");
let taskContainer = document.querySelector(".to-do-list");

// add task
addButton.addEventListener("click", function () {
    let taskValue = inputTasks.value;
    if (taskValue == '') {
        alert("please Enter your task")
    } else {
        localStorage.setItem("taskValue", taskValue);
        taskContainer.innerHTML += `
       <div class="task border w-50">
           <p>${taskValue}</p>
           <button class="btn btn-danger delete-btn"><i class="fas fa-trash-alt"></i></button>
           <button class="btn btn-warning edit-btn"><i class="fas fa-edit"></i></button>
       </div>
`
inputTasks.value =" "
    }
});


// delete task
taskContainer.addEventListener("click", function (event) {
    if (event.target.closest('.delete-btn')) {
        const taskItem = event.target.closest('.task');
        if (taskItem) {
            taskItem.remove();
        }
    }
});

// edit task
taskContainer.addEventListener("click", function (event) {
    if (event.target.closest('.edit-btn')) {
        const taskItem = event.target.closest('.task');
        const taskTextElement = taskItem.querySelector('p');
        
        let newTaskValue = prompt(`Edit your task ${taskTextElement.innerText}`);
        if (newTaskValue != "") {
            taskTextElement.innerText = newTaskValue;
        }
    }
});