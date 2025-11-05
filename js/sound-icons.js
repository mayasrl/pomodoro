const soundIcons = {
    rain: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="18" rx="12" ry="8" fill="#A8D8EA"/>
        <circle cx="16" cy="18" r="6" fill="#A8D8EA"/>
        <circle cx="32" cy="18" r="6" fill="#A8D8EA"/>
        <line x1="18" y1="28" x2="18" y2="36" stroke="#60A5FA" stroke-width="2" stroke-linecap="round"/>
        <line x1="24" y1="26" x2="24" y2="34" stroke="#60A5FA" stroke-width="2" stroke-linecap="round"/>
        <line x1="30" y1="28" x2="30" y2="36" stroke="#60A5FA" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    
    forest: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 8L18 20H20L14 32H34L28 20H30L24 8Z" fill="#7FD99F"/>
        <rect x="22" y="32" width="4" height="8" fill="#8B6F47"/>
    </svg>`,
    
    cafe: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="18" width="20" height="16" rx="2" fill="#FFB347"/>
        <path d="M32 22H36C37.1 22 38 22.9 38 24V28C38 29.1 37.1 30 36 30H32" stroke="#FFB347" stroke-width="2"/>
        <path d="M18 12C18 12 20 14 20 16" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M24 12C24 12 26 14 26 16" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="12" y1="34" x2="32" y2="34" stroke="#FFB347" stroke-width="2"/>
    </svg>`,
    
    ocean: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M6 24C6 24 12 20 18 24C24 28 30 20 36 24C42 28 42 24 42 24" stroke="#60A5FA" stroke-width="2" fill="none"/>
        <path d="M6 30C6 30 12 26 18 30C24 34 30 26 36 30C42 34 42 30 42 30" stroke="#60A5FA" stroke-width="2" fill="none"/>
        <path d="M6 36C6 36 12 32 18 36C24 40 30 32 36 36C42 40 42 36 42 36" stroke="#60A5FA" stroke-width="2" fill="none"/>
    </svg>`,
    
    fire: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 8C24 8 16 16 16 24C16 30 19.5 34 24 34C28.5 34 32 30 32 24C32 16 24 8 24 8Z" fill="#FFB347"/>
        <path d="M24 16C24 16 20 20 20 24C20 27 21.5 29 24 29C26.5 29 28 27 28 24C28 20 24 16 24 16Z" fill="#FFE66D"/>
    </svg>`,
    
    birds: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 20C12 20 16 16 20 20L24 16L28 20C32 16 36 20 36 20" stroke="#FFB347" stroke-width="2" stroke-linecap="round" fill="none"/>
        <circle cx="24" cy="24" r="6" fill="#FFE66D"/>
        <circle cx="22" cy="23" r="1.5" fill="#2C3E50"/>
        <path d="M24 26L26 28" stroke="#FFB347" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    
    wind: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 16H28C30 16 32 14 32 12C32 10 30 8 28 8C26 8 24 10 24 10" stroke="#A8D8EA" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 24H32C34 24 36 22 36 20C36 18 34 16 32 16" stroke="#A8D8EA" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 32H24C26 32 28 34 28 36C28 38 26 40 24 40C22 40 20 38 20 38" stroke="#A8D8EA" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    
    thunder: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="16" rx="10" ry="6" fill="#94A3B8"/>
        <circle cx="16" cy="16" r="5" fill="#94A3B8"/>
        <circle cx="32" cy="16" r="5" fill="#94A3B8"/>
        <path d="M28 20L20 32L24 32L22 42L32 26L28 26L28 20Z" fill="#FFE66D"/>
    </svg>`,
    
    stream: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 12C12 12 16 16 20 12C24 8 28 16 32 12C36 8 40 12 40 12" stroke="#60A5FA" stroke-width="2" fill="none"/>
        <path d="M12 20C12 20 16 24 20 20C24 16 28 24 32 20C36 16 40 20 40 20" stroke="#60A5FA" stroke-width="2" fill="none"/>
        <path d="M12 28C12 28 16 32 20 28C24 24 28 32 32 28C36 24 40 28 40 28" stroke="#60A5FA" stroke-width="2" fill="none"/>
        <path d="M12 36C12 36 16 40 20 36C24 32 28 40 32 36C36 32 40 36 40 36" stroke="#60A5FA" stroke-width="2" fill="none"/>
    </svg>`,
    
    night: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M32 12C32 12 28 16 28 24C28 32 32 36 32 36C24 36 18 30 18 22C18 14 24 8 32 12Z" fill="#A78BFA"/>
        <circle cx="36" cy="14" r="1.5" fill="#FFE66D"/>
        <circle cx="40" cy="20" r="1" fill="#FFE66D"/>
        <circle cx="38" cy="28" r="1.5" fill="#FFE66D"/>
    </svg>`,
    
    train: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="14" y="12" width="20" height="20" rx="3" fill="#94A3B8"/>
        <rect x="16" y="16" width="7" height="6" rx="1" fill="#60A5FA"/>
        <rect x="25" y="16" width="7" height="6" rx="1" fill="#60A5FA"/>
        <circle cx="20" cy="30" r="2" fill="#2C3E50"/>
        <circle cx="28" cy="30" r="2" fill="#2C3E50"/>
        <line x1="12" y1="34" x2="36" y2="34" stroke="#94A3B8" stroke-width="2"/>
    </svg>`,
    
    library: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="14" width="6" height="24" rx="1" fill="#A78BFA"/>
        <rect x="20" y="12" width="6" height="26" rx="1" fill="#F472B6"/>
        <rect x="28" y="16" width="6" height="22" rx="1" fill="#60A5FA"/>
        <line x1="10" y1="38" x2="38" y2="38" stroke="#94A3B8" stroke-width="2"/>
    </svg>`,
    
    fan: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="3" fill="#94A3B8"/>
        <ellipse cx="24" cy="14" rx="4" ry="8" fill="#A8D8EA"/>
        <ellipse cx="24" cy="34" rx="4" ry="8" fill="#A8D8EA"/>
        <ellipse cx="14" cy="24" rx="8" ry="4" fill="#A8D8EA"/>
        <ellipse cx="34" cy="24" rx="8" ry="4" fill="#A8D8EA"/>
    </svg>`,
    
    city: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="20" width="8" height="20" fill="#94A3B8"/>
        <rect x="20" y="12" width="8" height="28" fill="#A78BFA"/>
        <rect x="30" y="16" width="8" height="24" fill="#60A5FA"/>
        <rect x="12" y="22" width="2" height="2" fill="#FFE66D"/>
        <rect x="14" y="26" width="2" height="2" fill="#FFE66D"/>
        <rect x="22" y="16" width="2" height="2" fill="#FFE66D"/>
        <rect x="24" y="20" width="2" height="2" fill="#FFE66D"/>
        <rect x="32" y="20" width="2" height="2" fill="#FFE66D"/>
        <rect x="34" y="24" width="2" height="2" fill="#FFE66D"/>
    </svg>`,
    
    waterfall: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <line x1="20" y1="8" x2="20" y2="40" stroke="#60A5FA" stroke-width="2"/>
        <line x1="24" y1="12" x2="24" y2="40" stroke="#60A5FA" stroke-width="2"/>
        <line x1="28" y1="8" x2="28" y2="40" stroke="#60A5FA" stroke-width="2"/>
        <ellipse cx="24" cy="38" rx="12" ry="4" fill="#A8D8EA" opacity="0.5"/>
    </svg>`,
    
    space: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" fill="#2C3E50" opacity="0.3"/>
        <circle cx="18" cy="18" r="1.5" fill="#FFE66D"/>
        <circle cx="28" cy="16" r="1" fill="#FFE66D"/>
        <circle cx="32" cy="24" r="1.5" fill="#FFE66D"/>
        <circle cx="20" cy="30" r="1" fill="#FFE66D"/>
        <circle cx="30" cy="32" r="1.5" fill="#FFE66D"/>
        <path d="M24 20L26 24L30 26L26 28L24 32L22 28L18 26L22 24Z" fill="#A78BFA"/>
    </svg>`,
    
    keyboard: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="16" width="32" height="20" rx="2" fill="#94A3B8"/>
        <rect x="12" y="20" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="17" y="20" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="22" y="20" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="27" y="20" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="32" y="20" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="14" y="25" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="19" y="25" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="24" y="25" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="29" y="25" width="3" height="3" rx="0.5" fill="#E5E7EB"/>
        <rect x="16" y="30" width="16" height="2" rx="0.5" fill="#E5E7EB"/>
    </svg>`,
    
    clock: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="14" stroke="#94A3B8" stroke-width="2" fill="none"/>
        <line x1="24" y1="24" x2="24" y2="14" stroke="#A78BFA" stroke-width="2" stroke-linecap="round"/>
        <line x1="24" y1="24" x2="32" y2="24" stroke="#F472B6" stroke-width="2" stroke-linecap="round"/>
        <circle cx="24" cy="24" r="2" fill="#94A3B8"/>
    </svg>`,
    
    purr: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="26" rx="12" ry="10" fill="#FFB347"/>
        <path d="M16 18L14 12L18 16" fill="#FFB347"/>
        <path d="M32 18L34 12L30 16" fill="#FFB347"/>
        <circle cx="20" cy="24" r="2" fill="#2C3E50"/>
        <circle cx="28" cy="24" r="2" fill="#2C3E50"/>
        <path d="M20 28C20 28 22 30 24 30C26 30 28 28 28 28" stroke="#FF9999" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="24" y1="26" x2="24" y2="28" stroke="#2C3E50" stroke-width="1"/>
    </svg>`,
    
    waves: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M6 20C6 20 12 16 18 20C24 24 30 16 36 20C42 24 42 20 42 20" stroke="#60A5FA" stroke-width="2.5" fill="none"/>
        <path d="M6 28C6 28 12 24 18 28C24 32 30 24 36 28C42 32 42 28 42 28" stroke="#60A5FA" stroke-width="2.5" fill="none"/>
    </svg>`,
    
    campfire: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 10C24 10 18 16 18 22C18 26 20.5 29 24 29C27.5 29 30 26 30 22C30 16 24 10 24 10Z" fill="#FFB347"/>
        <path d="M24 16C24 16 21 19 21 22C21 24 22 26 24 26C26 26 27 24 27 22C27 19 24 16 24 16Z" fill="#FFE66D"/>
        <line x1="16" y1="32" x2="20" y2="38" stroke="#8B6F47" stroke-width="2"/>
        <line x1="32" y1="32" x2="28" y2="38" stroke="#8B6F47" stroke-width="2"/>
        <line x1="20" y1="34" x2="28" y2="34" stroke="#8B6F47" stroke-width="2"/>
    </svg>`,
    
    snow: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <line x1="24" y1="12" x2="24" y2="36" stroke="#A8D8EA" stroke-width="2"/>
        <line x1="12" y1="24" x2="36" y2="24" stroke="#A8D8EA" stroke-width="2"/>
        <line x1="16" y1="16" x2="32" y2="32" stroke="#A8D8EA" stroke-width="2"/>
        <line x1="32" y1="16" x2="16" y2="32" stroke="#A8D8EA" stroke-width="2"/>
        <circle cx="24" cy="12" r="2" fill="#A8D8EA"/>
        <circle cx="24" cy="36" r="2" fill="#A8D8EA"/>
        <circle cx="12" cy="24" r="2" fill="#A8D8EA"/>
        <circle cx="36" cy="24" r="2" fill="#A8D8EA"/>
    </svg>`,
    
    market: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 18L16 12L20 18H12Z" fill="#F472B6"/>
        <path d="M20 18L24 12L28 18H20Z" fill="#A78BFA"/>
        <path d="M28 18L32 12L36 18H28Z" fill="#60A5FA"/>
        <rect x="12" y="18" width="24" height="20" fill="#94A3B8" opacity="0.3"/>
        <rect x="18" y="24" width="4" height="8" fill="#FFB347"/>
        <rect x="26" y="24" width="4" height="8" fill="#FFB347"/>
    </svg>`,
    
    garden: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="18" cy="20" r="4" fill="#F472B6"/>
        <circle cx="14" cy="22" r="3" fill="#F472B6" opacity="0.7"/>
        <circle cx="22" cy="22" r="3" fill="#F472B6" opacity="0.7"/>
        <circle cx="18" cy="26" r="3" fill="#F472B6" opacity="0.7"/>
        <line x1="18" y1="24" x2="18" y2="36" stroke="#7FD99F" stroke-width="2"/>
        <path d="M16 28C16 28 14 30 12 30" stroke="#7FD99F" stroke-width="1.5"/>
        <path d="M20 30C20 30 22 32 24 32" stroke="#7FD99F" stroke-width="1.5"/>
    </svg>`,
    
    piano: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="16" width="28" height="20" rx="2" fill="#2C3E50"/>
        <rect x="12" y="18" width="4" height="12" fill="#FFFFFF"/>
        <rect x="18" y="18" width="4" height="12" fill="#FFFFFF"/>
        <rect x="24" y="18" width="4" height="12" fill="#FFFFFF"/>
        <rect x="30" y="18" width="4" height="12" fill="#FFFFFF"/>
        <rect x="14" y="18" width="2" height="8" fill="#2C3E50"/>
        <rect x="20" y="18" width="2" height="8" fill="#2C3E50"/>
        <rect x="26" y="18" width="2" height="8" fill="#2C3E50"/>
    </svg>`,
    
    vinyl: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="14" fill="#2C3E50"/>
        <circle cx="24" cy="24" r="10" fill="#A78BFA"/>
        <circle cx="24" cy="24" r="6" fill="#2C3E50"/>
        <circle cx="24" cy="24" r="2" fill="#F472B6"/>
    </svg>`,
    
    windchimes: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <line x1="12" y1="12" x2="36" y2="12" stroke="#94A3B8" stroke-width="2"/>
        <line x1="16" y1="12" x2="16" y2="28" stroke="#A8D8EA" stroke-width="1.5"/>
        <line x1="24" y1="12" x2="24" y2="32" stroke="#A8D8EA" stroke-width="1.5"/>
        <line x1="32" y1="12" x2="32" y2="26" stroke="#A8D8EA" stroke-width="1.5"/>
        <rect x="14" y="28" width="4" height="6" rx="1" fill="#A78BFA"/>
        <rect x="22" y="32" width="4" height="6" rx="1" fill="#F472B6"/>
        <rect x="30" y="26" width="4" height="6" rx="1" fill="#60A5FA"/>
    </svg>`,
    
    crickets: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="24" rx="8" ry="6" fill="#7FD99F"/>
        <line x1="16" y1="20" x2="12" y2="16" stroke="#7FD99F" stroke-width="2"/>
        <line x1="32" y1="20" x2="36" y2="16" stroke="#7FD99F" stroke-width="2"/>
        <line x1="18" y1="28" x2="14" y2="34" stroke="#7FD99F" stroke-width="2"/>
        <line x1="30" y1="28" x2="34" y2="34" stroke="#7FD99F" stroke-width="2"/>
        <circle cx="21" cy="23" r="1.5" fill="#2C3E50"/>
        <circle cx="27" cy="23" r="1.5" fill="#2C3E50"/>
    </svg>`
};
