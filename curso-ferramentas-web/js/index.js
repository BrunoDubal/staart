var allTodo = document.querySelector(".allTodo")
var addButton = document.querySelector(".addButton")
var newTodo = document.querySelector(".newTodo")
var todoValue = newTodo.value

function todo(e, todoValue){
  allTodo.innerHTML += `<div style = "background-color: red;">
  <i class="fas fa-circle"></i>
  <p>${todoValue}</p>
  <i class="fa-solid fa-xmark delButton"></i>          
  </div>`
  e.preventDefault();
}

addButton.addEventListener('click', todo)
