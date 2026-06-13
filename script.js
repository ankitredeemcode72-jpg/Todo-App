let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task == "") {
        alert("Please enter task");
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taskInput").value = "";

    displayTasks();
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        li.className =
        "list-group-item d-flex justify-content-between";

        let span = document.createElement("span");

        span.innerText = task;

        span.onclick = function() {
            span.style.textDecoration = "line-through";
        };

        let btn = document.createElement("button");

        btn.innerText = "Delete";

        btn.className = "btn btn-danger btn-sm";

        btn.onclick = function() {

            tasks.splice(index, 1);

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(btn);

        list.appendChild(li);

    });
}