function addTask() {

    let task =
    document.getElementById("taskInput").value;

    if(task===""){

        alert("Please enter task");

        return;
    }

    let li =
    document.createElement("li");

    li.className =
    "list-group-item d-flex justify-content-between";

    let span =
    document.createElement("span");

    span.innerText =
    task;

    let btn =
    document.createElement("button");

    btn.innerText =
    "Delete";

    btn.className =
    "btn btn-danger btn-sm";

    btn.onclick = function(){

        li.remove();

    };

    li.appendChild(span);

    li.appendChild(btn);

    document
    .getElementById("taskList")
    .appendChild(li);

    document
    .getElementById("taskInput")
    .value="";
}