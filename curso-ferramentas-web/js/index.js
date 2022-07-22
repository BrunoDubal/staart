var todoItems = [
  {text: "Estudar jornada front-end", checked: true, id: 1}
]

function renderTodoList(items = todoItems){
  const todoList = document.querySelector('.todos')
  todoList.innerHTML = ''
  items.forEach((todo) => {
    todoList.appendChild(renderTodoItem(todo))
  })
}

function renderTodoItem(todo){
  const isChecked = todo.checked
  const node = document.createElement("li")
  node.setAttribute('data-key', todo.id)

  const todoTemplate = `
  <li class="todo cursor-move p-2 flex justify-between items-center my-2">
    <div class="flex flex-row items-center">
      <div class="w-10 h-10 flex items-center justify-center relative">
        ${
          isChecked
            ? `<i class="fas fa-check text-green-400 text-2xl toggle-task"></i>`
            : `<i class="fas fa-circle text-gray-200 text-2xl hover:text-green-500 toggle-task" ></i>`
        }
      </div>
      <p class="text-gray-400 ml-4 ${isChecked ? "line-through" : ""}">${
  todo.text
}</p>
    </div>
    <button
      class="bg-transparent hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full hover:text-red-500"
    >
      <i class="remove-task fas fa-times text-2xl"></i>
    </button>
  </li>
`;

node.innerHTML = todoTemplate
return node
}