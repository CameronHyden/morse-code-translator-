const userTextBox = document.querySelector("#text-input");
const userResultBox = document.querySelector("#text-output");
const button = document.querySelector("#translate");
const refreshButton = document.querySelector("#refresh");






button.addEventListener("click", runTranslation);
refreshButton.addEventListener("click", clearTextFields);