var timer = null;
var remainingTime = 0;

function updateDisplay(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  var display =
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");
  document.getElementById("timeRemaining").innerText =
    "Time Remaining: " + display;
}

function startCountdown() {
  timer = setInterval(function () {
    remainingTime = remainingTime - 1;
    updateDisplay(remainingTime);

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null;
      playAlarm();
    }
  }, 1000);
}

function setAlarm() {
  if (timer) {
    clearInterval(timer);
  }
  remainingTime = Number(document.getElementById("alarmSet").value);
  updateDisplay(remainingTime);
  startCountdown();
}

function pauseAlarm() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else if (remainingTime > 0) {
    startCountdown();
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarm();
  });
}


function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
}

window.onload = setup;
