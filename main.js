let inputButton = document.getElementById("button-id");
let inputContainer = document.getElementById("todo-card-div");


inputButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = "hi";
    inputContainer.appendChild(paragraph);
});
