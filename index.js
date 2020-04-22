const toDoForm = document.querySelector(".toDoForm"),
    toDoList = document.querySelector(".toDoList"),
    toDoInput = toDoForm.querySelector("input");

const TODOS_LS = "toDos";

let toDos = [];

function delElement(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function addElement(inputText) {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const textSpan = document.createElement('span');
    const lastModified = document.createElement('span');
    const newId = toDos.length + 1;

    deleteBtn.innerText = '❌';
    deleteBtn.className = "delButton";
    deleteBtn.addEventListener("click", delElement);
    textSpan.innerText = inputText;

    li.appendChild(deleteBtn);
    li.appendChild(textSpan);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: inputText,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const value = toDoInput.value;
    addElement(value);
    toDoInput.value = '';
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            addElement(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();