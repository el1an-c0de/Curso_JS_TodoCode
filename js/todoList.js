const initialTasks = "Cocinar, Lavar, Planchar, Estudiar, Trabajar, Dormir";
let taskList = initialTasks.split(", ");

// Función para actualizar la tabla
function updateTable() {
    const tbody = document.querySelector("#taskTable tbody");
    tbody.innerHTML = ""; // Limpiar la tabla existente

    taskList.forEach((task, index) => {
        const row = document.createElement("tr");
        
        // Celda de tarea
        const taskCell = document.createElement("td");
        taskCell.textContent = task;
        row.appendChild(taskCell);
        
        // Celda de eliminar
        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteTask(index);
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        
        tbody.appendChild(row);
    });
}

// Función para agregar una nueva tarea
function addTask() {
    const taskInput = document.getElementById("task");
    const newTask = taskInput.value.trim();

    if (newTask) {
        taskList.push(newTask);
        taskInput.value = ""; // Limpiar el input
        updateTable(); // Actualizar la tabla con la nueva tarea
    }
}

// Función para eliminar una tarea
function deleteTask(index) {
    taskList.splice(index, 1); // Eliminar la tarea del array
    updateTable(); // Actualizar la tabla
}

// Función para alternar entre modo oscuro y claro
function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const toggleButton = document.getElementById("toggleMode");
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }
}

// Inicializar la tabla y el modo de tema al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateTable();
    document.getElementById("toggleMode").onclick = toggleMode;
});
