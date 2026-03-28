let taskList = document.querySelector("#tasksList ul");
let addTaskForm = document.getElementById("addTask");
let searchTaskForm = document.getElementById("searchTasks");
let taskCounter = 0

taskList.addEventListener("click", (event)=>{
    console.log(event);
    if(event.target.textContent === "Delete"){
        let li = event.target.parentElement;
        console.log(li);
        li.remove();
    }
})



addTaskForm.addEventListener("submit", (event)=>{
    event.preventDefault();



    let input = document.querySelector("#addTask input").value.trim();
    console.log(input);

    if(input.length === 0){
        alert("Oga input something first");
        return;
    }


    let liTag = document.createElement("li");
    let firstSpanTag = document.createElement("span");
    let secondSpanTag = document.createElement("span");
    let markBox = document.createElement("div")

    firstSpanTag.textContent = input;
    secondSpanTag.textContent = "Delete";
    markBox.innerHTML = `
                    <div id="markBox"><label id="checkBox">
                        <input type="checkbox" id="check" name="markAsCompleted" value="accepted">
                    </label>
                    </div>
    `;

    firstSpanTag.classList.add("taskName")
    secondSpanTag.classList.add("delete");

    liTag.appendChild(firstSpanTag);
    liTag.appendChild(markBox);
    liTag.appendChild(secondSpanTag);

    taskList.appendChild(liTag);
    taskCounter++;



    localStorage.setItem(input, JSON.stringify(liTag));


    addTaskForm.reset();
})

searchTaskForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    let input = document.querySelector("#searchTasks input").value.trim();
    console.log(input);

    for(let child of taskList.children){
        if(child.querySelector(".taskTitle").textContent === input){
            taskList.insertBefore(child, taskList.firstChild)
        }
    }

    searchTaskForm.reset();
})