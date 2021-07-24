//TODO:when check box is selected replace the entire div and have a message like "Task completed!".
//TODO: FIx bug where text won't show up in to do card.




let inputButton = document.getElementById("button-id");
let inputContainer = document.getElementById("todo-card-div");
let checkButton = document.getElementsByClassName("check-todo");
let todoList = document.querySelector('.todo-card-div');
let checkID = 0;

todoList.addEventListener('click', deleteCheck);

inputButton.addEventListener('click', function() {
    var todoli = document.createElement('li');
    todoli.className = "todo-li";
    var todocard= document.createElement('div');
    todocard.className = "todo-card";
    
    var tdparagraph = document.createElement('p');
    tdparagraph.className = "todo";

    var checkbox = document.createElement('button');
    var checkimg = document.createElement('img');
    checkbox.className = "check-todo";
    checkbox.id = `${checkID}`;
    checkimg.className = "check-img";
    checkimg.src = "./Resources/Icons/work-done.png"

    var removebox = document.createElement('button');
    var removeimg = document.createElement('img');
    removebox.className = "remove-todo";
    removeimg.className = "remove-img";
    removeimg.src = './Resources/Icons/delete.png';
    todoli.appendChild(todocard);
    todocard.appendChild(tdparagraph);
    todocard.appendChild(checkbox);
    checkbox.appendChild(checkimg);    
    todocard.appendChild(removebox);
    removebox.appendChild(removeimg);

    inputContainer.appendChild(todoli);
    checkID += 1;
});

function deleteCheck(e) {
    console.log(e.target)

}