//TODO: Add animation to hover over both buttons in todo cards.when check box is selected replace the entire div and have a message like "Task completed!".
//TODO: FIx bug where text won't show up in to do card.




let inputButton = document.getElementById("button-id");
let inputContainer = document.getElementById("todo-card-div");
let inputText = document.getElementById("inputId");

inputButton.addEventListener('click', function() {
    var todocard= document.createElement('div');
    todocard.className = "todo-card";
    
    var tdparagraph = document.createElement('p');
    tdparagraph.className = "todo";
    tdparagraph.innerText = inputText.innerHTML;

    var checkbox = document.createElement('button');
    var checkimg = document.createElement('img');
    checkbox.className = "check-todo";
    checkimg.className = "check-img";
    checkimg.src = './Resources/Icons/work-done.png';
    var removebox = document.createElement('button');
    var removeimg = document.createElement('img');
    removebox.className = "remove-todo";
    removeimg.className = "remove-img";
    removeimg.src = './Resources/Icons/delete.png';


    todocard.appendChild(tdparagraph);
    todocard.appendChild(checkbox);
    checkbox.appendChild(checkimg);    
    todocard.appendChild(removebox);
    removebox.appendChild(removeimg);

    inputContainer.appendChild(todocard);
});
