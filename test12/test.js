const task = [
    {id: 1,name: "Quét nhà"},
    {id: 2, name:"Giặt quần áo"}
];

let id = task.length;

const taskInput = document.querySelector("#taskInput");
const btnAdd = document.querySelector("#btn-add");
const taskList = document.querySelector("#talkList");

function renderList () {
    if ( task.length === 0){
        taskList.innerHTML = `<ul id="taskList">
        <li>Quét nhà</li>
        <li>Giặt quần áo</li>
      </ul>`
    } else {
      taskList.innerHTML = `<ul id="taskList">
        <li>Quét nhà</li>
        <li>Giặt quần áo</li>
        <li>${task.name}<li>
      </ul>`
    }
}

function addToDo(){
  const value = taskInput.value.trim();
  if(value === "") return alert("Vui lòng nhập tên công việc!");;
  let newTask = {
    id: ++id,
    name: value,
  };

  todos.push(newTask);
  taskInput.value = "";
  renderList();
}


btnAdd.addEventListener("click", addToDo);
taskInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addToDo();
    }
})
