const sounds = [
    { id: 'rain', name: 'Chuva', url: 'https://assets.mixkit.co/active_storage/sfx/2396/2396.wav' },
    { id: 'forest', name: 'Floresta', url: 'https://assets.mixkit.co/active_storage/sfx/2462/2462.wav' },
    { id: 'cafe', name: 'Cafeteria', url: 'https://assets.mixkit.co/active_storage/sfx/2456/2456.wav' },
    { id: 'ocean', name: 'Oceano', url: 'https://assets.mixkit.co/active_storage/sfx/2390/2390.wav' },
    { id: 'fire', name: 'Lareira', url: 'https://assets.mixkit.co/active_storage/sfx/2392/2392.wav' },
    { id: 'birds', name: 'Pássaros', url: 'https://assets.mixkit.co/active_storage/sfx/2484/2484.wav' },
    { id: 'wind', name: 'Vento', url: 'https://assets.mixkit.co/active_storage/sfx/2395/2395.wav' },
    { id: 'thunder', name: 'Trovão', url: 'https://assets.mixkit.co/active_storage/sfx/2390/2390.wav' },
    { id: 'stream', name: 'Riacho', url: 'https://assets.mixkit.co/active_storage/sfx/2396/2396.wav' },
    { id: 'night', name: 'Noite', url: 'https://assets.mixkit.co/active_storage/sfx/2474/2474.wav' },
    { id: 'waterfall', name: 'Cachoeira', url: 'https://assets.mixkit.co/active_storage/sfx/2513/2513.wav' },
    { id: 'campfire', name: 'Fogueira', url: 'https://assets.mixkit.co/active_storage/sfx/2477/2477.wav' },
    { id: 'crickets', name: 'Grilos', url: 'https://assets.mixkit.co/active_storage/sfx/2484/2484.wav' },
    { id: 'waves', name: 'Ondas', url: 'https://assets.mixkit.co/active_storage/sfx/1196/1196.wav' },
    { id: 'keyboard', name: 'Teclado', url: 'https://assets.mixkit.co/active_storage/sfx/2460/2460.wav' }
];

let currentAudio = null;
let currentSoundId = null;

function initSounds() {
    const grid = document.getElementById('sounds-grid');
    const volSlider = document.getElementById('volume-slider');
    const muteBtn = document.getElementById('mute-btn');
    
    if (!grid) return;
    
    sounds.forEach(sound => {
        const btn = document.createElement('button');
        btn.className = 'sound-btn';
        btn.dataset.soundId = sound.id;
        btn.innerHTML = `
            <div class="sound-icon">
                ${soundIcons[sound.id] || ''}
            </div>
            <span>${sound.name}</span>
        `;
        
        btn.addEventListener('click', () => {
            if (currentSoundId === sound.id) {
                stopSound();
            } else {
                playSound(sound, btn);
            }
        });
        
        grid.appendChild(btn);
    });
    
    if (volSlider) {
        volSlider.addEventListener('input', (e) => {
            if (currentAudio) {
                currentAudio.volume = e.target.value / 100;
            }
        });
    }
    
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            if (currentAudio) {
                currentAudio.muted = !currentAudio.muted;
                const volOn = muteBtn.querySelector('.volume-on');
                const volOff = muteBtn.querySelector('.volume-off');
                if (currentAudio.muted) {
                    volOn.style.display = 'none';
                    volOff.style.display = 'block';
                } else {
                    volOn.style.display = 'block';
                    volOff.style.display = 'none';
                }
            }
        });
    }
}

function playSound(sound, btn) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    document.querySelectorAll('.sound-btn').forEach(b => b.classList.remove('active'));
    
    currentAudio = new Audio(sound.url);
    currentAudio.loop = true;
    const volSlider = document.getElementById('volume-slider');
    currentAudio.volume = volSlider ? (volSlider.value / 100) : 0.5;
    
    currentAudio.play().catch(err => {
        console.error('Erro ao tocar:', err);
    });
    
    currentSoundId = sound.id;
    btn.classList.add('active');
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    currentSoundId = null;
    document.querySelectorAll('.sound-btn').forEach(btn => btn.classList.remove('active'));
}

if (document.getElementById('sounds-grid')) {
    initSounds();
}
