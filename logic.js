let currentInput = '';
let resultDisplayed = false;

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
    const darkThemeStyle = document.getElementById("dark-theme-style");
    if (themeToggle.checked) {
        darkThemeStyle.removeAttribute("disabled");
    } else {
        darkThemeStyle.setAttribute("disabled", "true");
    }
});

function deleteLastCharacter() {
    const display = document.getElementById('displayScreen');
    currentInput = currentInput.slice(0, -1); // Remove the last character
    display.value = currentInput;
}

function appendToDisplay(value) {
    if (resultDisplayed) {
        document.getElementById('displayScreen').value = '';
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById('displayScreen').value += value;
}

function clearDisplay() {
    document.getElementById('displayScreen').value = '';
    currentInput = '';
}

function calculateResult() {
    let result = '';
    try {
        result = eval(currentInput);
        document.getElementById('displayScreen').value = result;
        resultDisplayed = true;
    } catch (e) {
        document.getElementById('displayScreen').value = 'Error';
        resultDisplayed = true;
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('displayScreen');
    const inputValue = parseFloat(currentInput);
    if (inputValue >= 0) {
        const result = Math.sqrt(inputValue);
        display.value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } else {
        display.value = 'Error';
        resultDisplayed = true;
    }
}

function calculateSin() {
    const display = document.getElementById('displayScreen');
    const inputValue = parseFloat(currentInput);
    const result = Math.sin(inputValue);
    display.value = result;
    currentInput = result.toString();
    resultDisplayed = true;
}

function calculateCos() {
    const display = document.getElementById('displayScreen');
    const inputValue = parseFloat(currentInput);
    const result = Math.cos(inputValue);
    display.value = result;
    currentInput = result.toString();
    resultDisplayed = true;
}

function calculateTan() {
    const display = document.getElementById('displayScreen');
    const inputValue = parseFloat(currentInput);
    const result = Math.tan(inputValue);
    display.value = result;
    currentInput = result.toString();
    resultDisplayed = true;
}
