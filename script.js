
let laps = document.getElementById("laps");
let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let laps = document.getElementById("laps");
let lapCount = 1; // to number the laps

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
  lapCount = 1; // reset lap number
}

function lap() {
  if (timer === null) return; // only allow lap when running
  let li = document.createElement("li");
  li.innerText = `Lap ${lapCount} - ${display.innerText}`;
  laps.appendChild(li);
  lapCount++;
}
