function setAlarm() {
  var totalSeconds = Number(document.getElementById("alarmSet").value);

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

  updateDisplay(totalSeconds);

  var timer = setInterval(function () {
    totalSeconds = totalSeconds - 1;
    updateDisplay(totalSeconds);

    if (totalSeconds === 0) {
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
