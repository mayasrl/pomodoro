let focusTime = 25;
let shortBreak = 5;
let longBreak = 15;

let timeLeft = focusTime * 60;
let isRunning = false;
let mode = 'focus';
let cycles = 0;
let timerInterval = null;

const timerDisplay = document.getElementById('timer');
const playPauseBtn = document.getElementById('play-pause');
const resetBtn = document.getElementById('reset');
const settingsBtn = document.getElementById('settings');
const cyclesCount = document.getElementById('cycles-count');
const currentPet = document.getElementById('current-pet');
const modal = document.getElementById('settings-modal');

const playIcon = playPauseBtn.querySelector('.play-icon');
const pauseIcon = playPauseBtn.querySelector('.pause-icon');

const modeBtns = document.querySelectorAll('.mode-btn');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
    cyclesCount.textContent = cycles;
    updatePet();
}

function updatePet() {
    const petStage = Math.min(Math.floor(cycles / 2), 5);
    if (currentPet && typeof petSVGs !== 'undefined') {
        currentPet.innerHTML = petSVGs[petStage];
    }
}

function startTimer() {
    isRunning = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    timerDisplay.classList.add('running');
    
    requestNotificationPermission();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            handleTimerComplete();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    timerDisplay.classList.remove('running');
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    if (mode === 'focus') {
        timeLeft = focusTime * 60;
    } else if (mode === 'short') {
        timeLeft = shortBreak * 60;
    } else {
        timeLeft = longBreak * 60;
    }
    updateDisplay();
}

function handleTimerComplete() {
    pauseTimer();
    
    if (mode === 'focus') {
        cycles++;
        if (cycles % 4 === 0) {
            setMode('long');
        } else {
            setMode('short');
        }
        showNotification('Pomodoro', 'Hora de descansar!');
    } else {
        setMode('focus');
        showNotification('Pomodoro', 'Hora de focar!');
    }
    
    updateDisplay();
}

function setMode(newMode) {
    mode = newMode;
    modeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === newMode);
    });
    
    if (newMode === 'focus') {
        timeLeft = focusTime * 60;
    } else if (newMode === 'short') {
        timeLeft = shortBreak * 60;
    } else {
        timeLeft = longBreak * 60;
    }
    
    updateDisplay();
}

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function showNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body });
    }
}

playPauseBtn.addEventListener('click', () => {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!isRunning) {
            setMode(btn.dataset.mode);
        }
    });
});

settingsBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.getElementById('focus-time').value = focusTime;
    document.getElementById('short-break').value = shortBreak;
    document.getElementById('long-break').value = longBreak;
});

modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.querySelector('.btn-save').addEventListener('click', () => {
    focusTime = parseInt(document.getElementById('focus-time').value);
    shortBreak = parseInt(document.getElementById('short-break').value);
    longBreak = parseInt(document.getElementById('long-break').value);
    
    resetTimer();
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

updateDisplay();
