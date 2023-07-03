const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", handleInput);
function handleInput() {
    textOutput.textContent =
        textInput.value === "" ? "Anonymous" : textInput.value;
}
