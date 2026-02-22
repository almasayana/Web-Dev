const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const toggleBtn = document.getElementById("toggle-btn");

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTask();
});

toggleBtn.addEventListener("click", () => {
  if (list.style.display === "none") {
    list.style.display = "block";
    toggleBtn.textContent = "Hide List";
  } else {
    list.style.display = "none";
    toggleBtn.textContent = "Show List";
  }
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;
  span.className = "task-text"; 

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  input.value = "";
  input.focus();
}
