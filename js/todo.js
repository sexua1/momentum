'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//JSON.stringify()을 사용하면 어떤것이든 String의 형태로 바꿔준다
//JSON.parse()를 사용하면 String을 live object로 바꿀 수 있다(여기의 경우는 array)

function deleteTodo(event) {
  const targetLi = event.target.parentElement;
  targetLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(targetLi.id));
  // array.fiter(booleantype)은 array안의 value들을 boolean값에 따라 포함,제외 시킨후 새로운 배열을 리턴해준다
  saveToDos();
}

function printTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.addEventListener('click', deleteTodo);
  button.innerText = '❌';
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
} // append는 맨뒤에 있는것이 좋다

function todoSubmitHandler(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  printTodo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener('submit', todoSubmitHandler);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(printTodo);
  // Array.forEach(function)은 function의 parameter에 Array의 각 value argument로 받아 실행해준다
}
