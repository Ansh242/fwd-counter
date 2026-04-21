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
    if (count > 0) {
        statusElement.innerText = "Positive";
    } else if (count < 0) {
        statusElement.innerText = "Negative";
    } else {
        statusElement.innerText = "Zero";
    }

    localStorage.setItem("count", count);
}
function playSound() {
  const audio = new Audio('beep.mp3');
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 800);
}
incButton.onclick = function() {
    let stepValue = parseInt(stepInput.value);
    if (isNaN(stepValue)) {
        stepValue = 1;
    }
    count = count + stepValue;
    playSound();
    updateScreen();
};
decButton.onclick = function() {
    let stepValue = parseInt(stepInput.value);
    if (isNaN(stepValue)) {
        stepValue = 1;
    }
    count = count - stepValue;
    playSound();
    updateScreen();
};
resButton.onclick = function() {
    count = 0;
    playSound();
    updateScreen();
};
inc5Button.onclick = function() {
    count = count + 5;
    playSound();
    updateScreen();
};
dec5Button.onclick = function() {
    count = count - 5;
    playSound();
    updateScreen();
};
document.ondblclick = function() {
    count = 0;
    playSound();
    updateScreen();
};
document.onkeydown = function(event) {
    let stepValue = parseInt(stepInput.value);
    if (isNaN(stepValue)) {
        stepValue = 1;
    }

    if (event.key === "ArrowUp") {
        count = count + stepValue;
        playSound();
        updateScreen();
    } else if (event.key === "ArrowDown") {
        count = count - stepValue;
        playSound();
        updateScreen();
    }
};