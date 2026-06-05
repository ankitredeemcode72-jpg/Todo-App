function addTask() {

    let task =
    document.getElementById("taskInput").value;

    if(task===""){
        alert("Please enter a task");
        return;
    }

    let li =
    document.createElement("li");

    li.className =
    "list-group-item";

    li.innerText = task;

    document
    .getElementById("taskList")
    .appendChild(li);

    document
    .getElementById("taskInput")
    .value = "";
}