const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");

// Calculator Functions
function append(char) {
    display.value += char;
}

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Theme Toggle
themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    // Save theme in localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeSwitch.checked = true;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
// Calculate result
function calculate() {
    try {
        let result = eval(display.value.replace("×", "*"));
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Handle scientific functions
function scientificFunction(func) {
    try {
        let value = parseFloat(display.value) || 0;
        let result;
        switch (func) {
            case "sin":
                result = Math.sin(value);
                break;
            case "cos":
                result = Math.cos(value);
                break;
            case "tan":
                result = Math.tan(value);
                break;
            case "log":
                result = Math.log10(value);
                break;
            case "ln":
                result = Math.log(value);
                break;
            case "sqrt":
                result = Math.sqrt(value);
                break;
            case "pow":
                result = Math.pow(value, 2);
                break;
            case "exp":
                result = Math.exp(value);
                break;
            case "abs":
                result = Math.abs(value);
                break;
            case "fact":
                result = factorial(value);
                break;
            case "deg":
                result = (value * 180) / Math.PI;
                break; // Radians to degrees
            case "rad":
                result = (value * Math.PI) / 180;
                break; // Degrees to radians
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate factorial recursively
function factorial(n) {
    if (n < 0 || n !== Math.floor(n)) return NaN;
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
// Track current mode
let isScientific = true;

// Toggle between normal and scientific modes
function toggleMode() {
    const calculator = document.getElementById("calculator");
    const buttons = document.getElementById("buttons");
    const toggle = document.querySelector(".toggle");
    const sciButtons = document.querySelectorAll(".sci-only");
    const equals = document.getElementById("equals");
    const zero = document.getElementById("zero");

    isScientific = !isScientific;

    if (isScientific) {
        // Scientific mode: 6 columns, show all buttons
        calculator.classList.remove("normal");
        buttons.classList.remove("normal");
        toggle.textContent = "Normal Mode";
        sciButtons.forEach((btn) => btn.classList.remove("hidden"));
        equals.style.gridRow = "span 2";
        zero.style.gridColumn = "span 2";
    } else {
        // Normal mode: 4 columns, hide scientific buttons
        calculator.classList.add("normal");
        buttons.classList.add("normal");
        toggle.textContent = "Scientific Mode";
        sciButtons.forEach((btn) => btn.classList.add("hidden"));
        equals.style.gridRow = "span 2";
        zero.style.gridColumn = "span 2";
    }
}

// Initialize in normal mode
toggleMode();
