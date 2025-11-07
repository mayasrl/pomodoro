let focusTime = 25;
let shortBreak = 5;
let longBreak = 15;

let timeLeft = focusTime * 60;
let isRunning = false;
let mode = 'focus';
let cycles = 0;
let timerInterval = null;

const display = document.getElementById('timer');
const playBtn = document.getElementById('play-pause');
const resetBtn = document.getElementById('reset');
const settingsBtn = document.getElementById('settings');
const cyclesCount = document.getElementById('cycles-count');
const currentPet = document.getElementById('current-pet');
const modal = document.getElementById('settings-modal');

const playIcon = playBtn.querySelector('.play-icon');
const pauseIcon = playBtn.querySelector('.pause-icon');

const modeBtns = document.querySelectorAll('.mode-btn');

function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(timeLeft);
    cyclesCount.textContent = cycles;
    updatePet();
}

function updatePet() {
    const stage = Math.min(Math.floor(cycles / 2), 5);
    if (currentPet && typeof petSVGs !== 'undefined') {
        currentPet.innerHTML = petSVGs[stage];
    }
}

function start() {
    isRunning = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    display.classList.add('running');
    
    requestNotif();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            complete();
        }
    }, 1000);
}

function pause() {
    isRunning = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    display.classList.remove('running');
    clearInterval(timerInterval);
}

function reset() {
    pause();
    if (mode === 'focus') {
        timeLeft = focusTime * 60;
    } else if (mode === 'short') {
        timeLeft = shortBreak * 60;
    } else {
        timeLeft = longBreak * 60;
    }
    updateDisplay();
}

function complete() {
    pause();
    
    if (mode === 'focus') {
        cycles++;
        if (cycles % 4 === 0) {
            changeMode('long');
        } else {
            changeMode('short');
        }
        notify('Pomodoro', 'Hora de descansar!');
    } else {
        changeMode('focus');
        notify('Pomodoro', 'Hora de focar!');
    }
    
    updateDisplay();
}

function changeMode(newMode) {
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

function requestNotif() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function notify(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body });
    }
}

playBtn.addEventListener('click', () => {
    if (isRunning) {
        pause();
    } else {
        start();
    }
});

resetBtn.addEventListener('click', reset);

modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!isRunning) {
            changeMode(btn.dataset.mode);
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
    
    reset();
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

updateDisplay();
