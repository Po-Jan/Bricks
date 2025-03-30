let timerInterval;
let startTime;
let elapsedBeforePause = 0; 
let formatted = "00:00";

function startTimer() {
  startTime = Date.now() - elapsedBeforePause; // resume from where we left
  timerInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    formatted = formatTime(elapsed);
    displayTimer();
  }, 100);
}
function displayTimer(){
  document.querySelector('.time').textContent = `Time: ${formatted}`;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedBeforePause = 0;
  formatted = "00:00";
}
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${paddedMinutes}:${paddedSeconds}`;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedBeforePause = Date.now() - startTime;
}

let isPaused=false;
const pauseButton = document.querySelector("#pauseButton");
const pauseText = pauseButton.querySelector("span");

pauseButton.addEventListener("click", () => {
  pauseUnpause()
});

function pauseUnpause(){
  if(!gameEnded){
    if (!isPaused) {
      pauseGame();
      pauseText.textContent = "Resume"; 
      isPaused = true;
  } else {
      unPauseGame();
      pauseText.textContent = "Pause";
      isPaused = false;
  }
  }
}
