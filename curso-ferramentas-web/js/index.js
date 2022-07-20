var allTodo = document.querySelector(".allTodo")
var addButton = document.querySelector(".addButton")
var newTodo = document.querySelector(".newTodo")

function todo(e){
  if(newTodo.value == ''){
    alert('Por favor, descreva a tarefa.')
  } else {
      allTodo.innerHTML += `<div class="todo">
      <div class="intodo">
        <i class="fas fa-circle"></i>
        <p class="ptodo">${newTodo.value}</p>
      </div>
      <i class="fa-solid fa-xmark delButton"></i>          
    </div>`
  }

  e.preventDefault();
}

addButton.addEventListener('click', todo)
