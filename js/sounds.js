const sounds = [
    { id: 'rain', name: 'Chuva', url: 'https://assets.mixkit.co/active_storage/sfx/2393/2393.wav' },
    { id: 'forest', name: 'Floresta', url: 'https://assets.mixkit.co/active_storage/sfx/2462/2462.wav' },
    { id: 'cafe', name: 'Cafeteria', url: 'https://assets.mixkit.co/active_storage/sfx/2456/2456.wav' },
    { id: 'ocean', name: 'Oceano', url: 'https://assets.mixkit.co/active_storage/sfx/2476/2476.wav' },
    { id: 'fire', name: 'Lareira', url: 'https://assets.mixkit.co/active_storage/sfx/2392/2392.wav' },
    { id: 'birds', name: 'Pássaros', url: 'https://assets.mixkit.co/active_storage/sfx/2473/2473.wav' },
    { id: 'wind', name: 'Vento', url: 'https://assets.mixkit.co/active_storage/sfx/2395/2395.wav' },
    { id: 'thunder', name: 'Trovão', url: 'https://assets.mixkit.co/active_storage/sfx/2398/2398.wav' },
    { id: 'stream', name: 'Riacho', url: 'https://assets.mixkit.co/active_storage/sfx/2396/2396.wav' },
    { id: 'night', name: 'Noite', url: 'https://assets.mixkit.co/active_storage/sfx/2474/2474.wav' },
    { id: 'waterfall', name: 'Cachoeira', url: 'https://assets.mixkit.co/active_storage/sfx/2394/2394.wav' },
    { id: 'campfire', name: 'Fogueira', url: 'https://assets.mixkit.co/active_storage/sfx/2477/2477.wav' },
    { id: 'crickets', name: 'Grilos', url: 'https://assets.mixkit.co/active_storage/sfx/2484/2484.wav' },
    { id: 'waves', name: 'Ondas', url: 'https://assets.mixkit.co/active_storage/sfx/2390/2390.wav' },
    { id: 'keyboard', name: 'Teclado', url: 'https://assets.mixkit.co/active_storage/sfx/2460/2460.wav' }
];

let currentAudio = null;
let currentSoundId = null;

function initSounds() {
    const soundsGrid = document.getElementById('sounds-grid');
    const volumeSlider = document.getElementById('volume-slider');
    const muteBtn = document.getElementById('mute-btn');
    
    if (!soundsGrid) return;
    
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
        
        soundsGrid.appendChild(btn);
    });
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            if (currentAudio) {
                currentAudio.volume = e.target.value / 100;
            }
        });
    }
    
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            if (currentAudio) {
                currentAudio.muted = !currentAudio.muted;
                const volumeOn = muteBtn.querySelector('.volume-on');
                const volumeOff = muteBtn.querySelector('.volume-off');
                if (currentAudio.muted) {
                    volumeOn.style.display = 'none';
                    volumeOff.style.display = 'block';
                } else {
                    volumeOn.style.display = 'block';
                    volumeOff.style.display = 'none';
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
    const volumeSlider = document.getElementById('volume-slider');
    currentAudio.volume = volumeSlider ? (volumeSlider.value / 100) : 0.5;
    
    currentAudio.play().then(() => {
        console.log('Som tocando:', sound.name);
    }).catch(err => {
        console.error('Erro ao reproduzir:', err);
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
