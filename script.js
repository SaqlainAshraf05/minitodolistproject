// DOM selection
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task using plain JS DOM
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
});

// jQuery for Delete and Mark Complete
$(document).on("click", ".deleteBtn", function () {
  $(this).parent().fadeOut(300, function () {
    $(this).remove();
  });
});

$(document).on("click", "#taskList li span", function () {
  $(this).toggleClass("completed");
});
