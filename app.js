// UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");

// Load event listeners
function loadEventListeners() {}

//Add task event
form.addEventListener("submit", addTask);
//Remove task event
taskList.addEventListener("click", removeTask);
//Clear task button event
clearBtn.addEventListener("click", clearTasks);
//Filter tasks events
filter.addEventListener("keyup", filterTasks);

//Add task function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  // Add task element
  const li = document.createElement("li");
  //Add class name
  li.className = "collection-item";
  //Adding text to li elelment
  li.appendChild(document.createTextNode(taskInput.value));

  //Create link element
  const link = document.createElement("a");
  //Add class name
  link.className = "delete-item secondary-content";
  //Add icon (html)
  link.innerHTML = '<i class="fa fa-remove"</i>';

  //Append link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = "";

  e.preventDefault();
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear tasks button function
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//Task filtering function
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
