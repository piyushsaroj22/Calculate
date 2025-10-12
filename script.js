const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");

// Calculator Functions
function append(char) {
    display.value += char;
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
