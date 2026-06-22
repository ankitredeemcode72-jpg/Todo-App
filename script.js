let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter task");
        return;
    }

    tasks.push({
        text: task,
        completed: false,
        priority: document.getElementById("priority").value,
        dueDate: document.getElementById("dueDate").value
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    document.getElementById("dueDate").value = "";

    displayTasks();
}

function displayTasks() {
    renderTasks(tasks);
}

function renderTasks(taskArray) {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    document.getElementById("counter").innerText =
        "Total Tasks : " + tasks.length;

    let completed = tasks.filter(function(task) {
        return task.completed;
    }).length;

    document.getElementById("completedCounter").innerText =
        "Completed Tasks : " + completed;

    taskArray.forEach(function(task) {

        let originalIndex = tasks.indexOf(task);

        let li = document.createElement("li");

        li.className =
            "list-group-item d-flex justify-content-between align-items-center";

        let span = document.createElement("span");

        span.innerText =
            task.text +
            " (" +
            task.priority +
            ") - Due: " +
            (task.dueDate || "No Date");

        if (task.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }

        span.style.cursor = "pointer";

        span.onclick = function () {

            tasks[originalIndex].completed =
                !tasks[originalIndex].completed;

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

            displayTasks();
        };

        let buttonDiv = document.createElement("div");

        let editBtn = document.createElement("button");

        editBtn.innerText = "Edit";

        editBtn.className =
            "btn btn-primary btn-sm me-2";

        editBtn.onclick = function () {

            let updated = prompt(
                "Edit Task",
                task.text
            );

            if (updated !== null && updated.trim() !== "") {

                tasks[originalIndex].text =
                    updated.trim();

                localStorage.setItem(
                    "tasks",
                    JSON.stringify(tasks)
                );

                displayTasks();
            }
        };

        let deleteBtn = document.createElement("button");

        deleteBtn.innerText = "Delete";

        deleteBtn.className =
            "btn btn-danger btn-sm";

        deleteBtn.onclick = function () {

            tasks.splice(originalIndex, 1);

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

            displayTasks();
        };

        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(buttonDiv);

        list.appendChild(li);
    });
}

function clearTasks() {

    let answer = confirm("Delete all tasks?");

    if (answer) {

        tasks = [];

        localStorage.removeItem("tasks");

        displayTasks();
    }
}

function showAll() {
    renderTasks(tasks);
}

function showCompleted() {

    let completedTasks = tasks.filter(function(task) {
        return task.completed;
    });

    renderTasks(completedTasks);
}

function showPending() {

    let pendingTasks = tasks.filter(function(task) {
        return !task.completed;
    });

    renderTasks(pendingTasks);
}