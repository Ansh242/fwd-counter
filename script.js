let countElement = document.getElementById("count");
let statusElement = document.getElementById("status");
let stepInput = document.getElementById("step");
let incButton = document.getElementById("inc");
let decButton = document.getElementById("dec");
let resButton = document.getElementById("res");
let inc5Button = document.getElementById("inc5");
let dec5Button = document.getElementById("dec5");
let count = 0;
let savedCount = localStorage.getItem("count");
if (savedCount !== null) {
    count = parseInt(savedCount);
}
updateScreen();
function updateScreen() {
    countElement.innerText = count;

    // Check status
    if (count > 0) {
        statusElement.innerText = "Positive";
    } else if (count < 0) {
        statusElement.innerText = "Negative";
    } else {
        statusElement.innerText = "Zero";
    }
    localStorage.setItem("count", count);
}
incButton.onclick = function() {
    let stepValue = parseInt(stepInput.value);
    if (isNaN(stepValue)) {
        stepValue = 1;
    }
    count = count + stepValue;
    updateScreen();
};

decButton.onclick = function() {
    let stepValue = parseInt(stepInput.value);
    if (isNaN(stepValue)) {
        stepValue = 1;
    }
    count = count - stepValue;
    updateScreen();
};

resButton.onclick = function() {
    count = 0;
    updateScreen();
};

inc5Button.onclick = function() {
    count = count + 5;
    updateScreen();
};

dec5Button.onclick = function() {
    count = count - 5;
    updateScreen();
};

// Double click anywhere to reset
document.ondblclick = function() {
    count = 0;
    updateScreen();
};

// Keyboard controls
document.onkeydown = function(event) {
    let stepValue = parseInt(stepInput.value);
    if (isNaN(stepValue)) {
        stepValue = 1;
    }

    if (event.key === "ArrowUp") {
        count = count + stepValue;
        updateScreen();
    } else if (event.key === "ArrowDown") {
        count = count - stepValue;
        updateScreen();
    }
};