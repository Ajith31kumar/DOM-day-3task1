
const display = document.getElementById('display');
let currentExpression = '';
let memory = 0;

function appendToDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
}

function calculate(operator) {
    if (operator === '=') {
        try {
            currentExpression = eval(currentExpression);
        } catch (error) {
            currentExpression = 'Error';
        }
    } else {
        currentExpression += operator;
    }
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

function showAlert() {
    alert("Only numbers are allowed.");
}

function memoryPlus() {
    if (!isNaN(currentExpression)) {
        memory += parseFloat(currentExpression);
    }
}

function memoryMinus() {
    if (!isNaN(currentExpression)) {
        memory -= parseFloat(currentExpression);
    }
}

function memoryClear() {
    memory = 0;
}

// Handle keyboard events for numbers
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate('=');
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Backspace') {
        currentExpression = currentExpression.slice(0, -1);
        display.value = currentExpression;
    } else {
        showAlert();
    }
});