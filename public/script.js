const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const detailsInput = document.getElementById('detailsInput');
const counterLabel = document.getElementById('counterLabel');
const timeLabel = document.getElementById('timeLabel');

let timerRunning = false;
let elapsedSeconds = 0;
let timerInterval = null;

function updateTimerDisplay() {
  const details = detailsInput.value.trim();
  const detailText = details ? ` | Details: ${details}` : '';
  counterLabel.textContent = `Elapsed: ${elapsedSeconds}s${detailText}`;
}

function updateTime() {
  const now = new Date();
  timeLabel.textContent = `Local time: ${now.toLocaleTimeString()}`;
}

startBtn.addEventListener('click', () => {
  if (timerRunning) return;

  timerInterval = setInterval(() => {
    elapsedSeconds += 1;
    updateTimerDisplay();
  }, 1000);
  timerRunning = true;
});

stopBtn.addEventListener('click', () => {
  if (!timerRunning) return;

  clearInterval(timerInterval);
  timerRunning = false;
});

detailsInput.addEventListener('input', updateTimerDisplay);

updateTimerDisplay();
updateTime();
setInterval(updateTime, 1000);
