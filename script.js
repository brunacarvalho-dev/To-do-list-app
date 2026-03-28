let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = task.done ? "completed" : "";

    span.onclick = () => toggleTask(index);

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(btn);

    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    done: false
  });

  input.value = "";
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

renderTasks();