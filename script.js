document.addEventListener("DOMContentLoaded", function () {
    // Grabbing my elements via DOM

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter your task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
        // } else if (taskText === "") {
        //     alert("Please enter your task");
        //     return;
        // }


    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask(event)
        }
    });
});