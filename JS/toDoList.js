const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const toDoList = document.getElementById("toDoList");
const errorMessage = document.getElementById("errorMessage");

const listArray = [];

addTaskBtn.addEventListener("click", () => {
  const taskContent = taskInput.value;
  if (taskContent !== "") {
    listArray.push(taskContent);
    console.log(listArray);
    taskInput.value = "";
  }

  updateList();
});

function updateList() {
  toDoList.textContent = "";
  listArray.forEach((element) => {
    const listItems = document.createElement("li");
    listItems.textContent = element;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Completed";

    deleteBtn.addEventListener("click", () => {
      const itemIndex = listArray.indexOf(element);
      listArray.splice(itemIndex, 1);
      console.log(listArray);
      updateList();
    });
    toDoList.appendChild(listItems);
    listItems.appendChild(deleteBtn);
  });
}
