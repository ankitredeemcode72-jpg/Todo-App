function addTask() {
    let task = document.getElementById("taskInput").value;

    let li = document.createElement("li");
    li.innerText = task;

    document.getElementById("taskList").appendChild(li);
}