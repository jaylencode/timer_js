const timerEl = document.querySelector(".watch .timer");
const startBtnEl = document.getElementById("start");
const resetBtnEl = document.getElementById("reset");
const pauseBtnEl = document.getElementById("pause");

let seconds = 0;
let interval = null;

startBtnEl.addEventListener("click", start);
pauseBtnEl.addEventListener("click", stop);
resetBtnEl.addEventListener("click", reset);

function timer() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  timerEl.innerText = `${hrs}:${mins}:${secs}`;
}

timer();

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  timerEl.innerText = "00:00:00";
}
