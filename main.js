let inputButton = document.getElementById("button-id");
let inputText = document.getElementById("inputId");
let inputContainer = document.getElementById("text-div");
let title = document.getElementById("title");
title.innerHTML = "aswe";

const textChange = () => {
  title.innerHTML = "eeeeeeeeeeee";
}
inputButton.addEventListener('click', textChange);
