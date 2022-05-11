import todoArray from "./../api/todos.js";
import * as lib from "./helpers/lib.js";

let storage = window.localStorage;
let data =
  JSON.parse(storage.getItem("todos")).length > 0
    ? JSON.parse(storage.getItem("todos"))
    : todoArray;

let makerTodo = document.querySelector(".maker-todo");
let addTodo = document.querySelector(".add-todo");
let listGroup = document.querySelector(".list-group");

// inputdan listga todoni qo'shish
addTodo.addEventListener("click", () => {
  if (makerTodo.value.trim().length <= 3) {
    alert("belgilar soni 4tadan kam");
    return;
  }

  let newTodoObject = lib.todoObjectCreator(makerTodo.value);
  data.push(newTodoObject);

  storage.setItem("todos", JSON.stringify(data));

  let newTodoNode = lib.createElement(
    newTodoObject.id,
    newTodoObject.isDone,
    newTodoObject.text
  );

  listGroup.prepend(newTodoNode);
  makerTodo.value = "";
});

// statik datani listga reverse shaklda render qilish
JSON.parse(storage.getItem("todos")).forEach((todo) => {
  let newTodoNode = lib.createElement(todo.id, todo.isDone, todo.text);

  listGroup.prepend(newTodoNode);
});
