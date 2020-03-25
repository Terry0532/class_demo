var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", completeTodo);
init();

function init() {
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
        todos = storedTodos;
    }
    renderTodos();
}

function storeTodos() {
    localStorage.setItem("todos", JSON,stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.innerText = todos.length;
    for (let i = 0; i < todos.length; i++) {
        var currentItem = todos[i];
        var newTodoItem = document.createElement("li");
        newTodoItem.setAttribute("data-todoIndex", i);
        newTodoItem.innerText = currentItem;
        var completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        newTodoItem.appendChild(completeButton);
        todoList.appendChild(newTodoItem);
    }
}

function addTodo(event) {
    event.preventDefault();
    var todoInputValue = todoInput.value.trim();
    if (todoInputValue === "") {
        alert("enter somthing");
        return;
    }
    todos.push(todoInputValue);
    todoInput.value = "";
    renderTodos();
}

function completeTodo(event) {
    var element = event.target;
    if (element.matches("button")) {
        var todoIndex = element.parentElement.getAttribute("data-todoIndex");
        console.log(todoIndex);
        todos.splice(todoIndex, 1);
        renderTodos();
    }
}