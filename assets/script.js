const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Mostrar mensaje si no hay tareas al cargar
checkEmptyTasks();

form.addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    fetch("store.php", {

        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },

        body: new URLSearchParams({
            title: title,
            description: description
        })

    })
    .then(res => res.json())
    .then(task => {

        addTaskToDOM(task);

        form.reset();

    });

});


function addTaskToDOM(task){

    // Eliminar mensaje "No hay tareas"
    const emptyMessage = document.getElementById("emptyMessage");
    if(emptyMessage){
        emptyMessage.remove();
    }

    const li = document.createElement("li");

    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        <div>
            <strong class="${task.completed ? 'text-decoration-line-through' : ''}">
                ${task.title}
            </strong>
            <br>
            <small>${task.description}</small>
        </div>

        <button type="button" class="btn btn-sm ${task.completed ? 'btn-success' : 'btn-warning'}">
            ${task.completed ? 'Completada' : 'Pendiente'}
        </button>
    `;

    const button = li.querySelector("button");

    button.addEventListener("click", function(){

        fetch("update.php", {

            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },

            body: new URLSearchParams({
                id: task.id
            })

        })
        .then(res => res.json())
        .then(() => {

            const title = li.querySelector("strong");

            title.classList.toggle("text-decoration-line-through");

            if(button.textContent === "Pendiente"){
                button.textContent = "Completada";
                button.classList.remove("btn-warning");
                button.classList.add("btn-success");
            }else{
                button.textContent = "Pendiente";
                button.classList.remove("btn-success");
                button.classList.add("btn-warning");
            }

        });

    });

    taskList.appendChild(li);

}


// Función para mostrar mensaje cuando no hay tareas
function checkEmptyTasks(){

    if(taskList.children.length === 0){

        taskList.innerHTML = `
            <li class="list-group-item text-center text-muted" id="emptyMessage">
                No hay tareas
            </li>
        `;

    }

}