var todoItems = []


function renderTodoList(items = todoItems){
  const todoList = document.querySelector('.todos')
  todoList.innerHTML = ''
  items.forEach((todo) => {
    todoList.appendChild(renderTodoItem(todo))
  })
  completedTodo()
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

function handleFormSubmit(event){
  event.preventDefault()

  const input = document.querySelector("#todo-input")
  const text = input.value.trim()

  if(text){
    addTodo(text)
    input.value = ""
    input.focus()
  }
}

function addTodo(text){
  const todo = { text, checked: false, id: Date.now()}
  todoItems.push(todo)
  renderTodoList()
}

function filterTodos(filter){
  const items = todoItems.filter((todo) => {
    switch(filter){
      case "all":
        return true;
      case "completed":
        return todo.checked;
      case "active":
        return !todo.checked;
    }
  })
  renderTodoList(items)
}

function clearAllCompleted(){
  todoItems = todoItems.filter((todo) => {!todo.checked})
  renderTodoList()
}

function handleTodoClick(e){
  const classList = e.target.classList

  if(classList.contains('remove-task')){
    const id = 
    e.target.parentElement.parentElement.parentElement.getAttribute('data-key')
    removeTodo(parseInt(id))
  }
  if(classList.contains('toggle-task')){
    const id = 
    e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-key')
    toggleDone(parseInt(id))
  }
}

function removeTodo(id){
  const todo = findTodoById(id)
  const index = todoItems.indexOf(todo)
  todoItems.splice(index, 1)
  renderTodoList()
}

function toggleDone(id){
  const todo = findTodoById(id)
  todo.checked = !todo.checked
  renderTodoList()
}

function findTodoById(id){
  return todoItems.find((todo) => todo.id === id)
}

function completedTodo(){
  const count = document.querySelector('.completed-count')
  const completedCount = todoItems.filter((todo) => todo.checked).length

  count.innerHTML = `${completedCount}/${todoItems.length}`
  return count
}

window.onload = () => {
  const form = document.querySelector("#todo-form")

  const filterAll = document.querySelector(".filter-all")
  const filterActive = document.querySelector(".filter-active")
  const filterCompleted = document.querySelector(".filter-completed")
  const clearCompleted = document.querySelector(".clear-completed")
  const items = document.querySelector(".todos")


  filterAll.addEventListener('click', () => {filterTodos("all")})
  filterActive.addEventListener('click', () => {filterTodos("active")})
  filterCompleted.addEventListener('click', () => {filterTodos("completed")})
  clearCompleted.addEventListener('click', () => {clearAllCompleted()})
  form.addEventListener('submit', handleFormSubmit)
  items.addEventListener('click', handleTodoClick)


  renderTodoList()
}