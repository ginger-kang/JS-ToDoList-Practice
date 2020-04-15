var toDoForm = document.querySelector(".toDoForm"),
    toDoList = document.querySelector(".toDoList"),
    toDoInput = document.querySelector("input");

function delElement(event) {
    var target = event.target;
    var li = target.parentNode;
    toDoList.removeChild(li);
}

function addElement(inputText) {
    var listElement = document.createElement('li');
    var deleteBtn = document.createElement('button');
    var textSpan = document.createElement('span');

    deleteBtn.innerText = '❌';
    deleteBtn.className = "delButton";
    deleteBtn.addEventListener("click", delElement);
    textSpan.innerText = inputText;

    listElement.appendChild(textSpan);
    listElement.appendChild(deleteBtn);

    toDoList.appendChild(listElement);
}

function handleSubmit(event) {
    event.preventDefault();
    var value = toDoInput.value;
    addElement(value);
    toDoInput.value = '';
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
}

init();