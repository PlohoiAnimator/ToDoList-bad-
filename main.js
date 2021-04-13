let addToDo = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');

addToDo.addEventListener('click', function(){
    var pharagraph = document.createElement('p');
    pharagraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(pharagraph);

    pharagraph.innerHTML = inputField.value;
    inputField.value =  "";

    pharagraph.addEventListener('click', function(){
        pharagraph.style.textDecoration = "line-through";
    })

    pharagraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(pharagraph);
    })
})















































/*let addToDoButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function(){
    var pharagraph = document.createElement('p');
    pharagraph.classList.add('paragraph-styling');
    pharagraph.innerHTML = inputField.value;
    inputField.value = "";
    toDoContainer.appendChild(pharagraph);
    pharagraph.addEventListener('click', function(){
        pharagraph.style.textDecoration = "line-through";
    })

    pharagraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(pharagraph);
    })
});*/ 