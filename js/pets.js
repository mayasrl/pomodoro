const petSVGs = [
    `<svg width="80" height="80" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="40" rx="20" ry="24" fill="#F5E6D3"/>
        <ellipse cx="28" cy="35" rx="2" ry="3" fill="#E8D4B8" opacity="0.5"/>
        <ellipse cx="36" cy="35" rx="2" ry="3" fill="#E8D4B8" opacity="0.5"/>
        <path d="M25 45C25 45 28 47 32 47C36 47 39 45 39 45" stroke="#D4C4A8" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    
    `<svg width="80" height="80" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="38" rx="18" ry="20" fill="#FFE66D"/>
        <circle cx="28" cy="34" r="2" fill="#2C3E50"/>
        <circle cx="36" cy="34" r="2" fill="#2C3E50"/>
        <path d="M30 40C30 40 31 41 32 41C33 41 34 40 34 40" stroke="#FFB347" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M20 30L18 25L22 28" fill="#FFE66D"/>
        <path d="M44 30L46 25L42 28" fill="#FFE66D"/>
    </svg>`,
    
    `<svg width="80" height="80" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="36" rx="16" ry="18" fill="#FFB347"/>
        <circle cx="28" cy="32" r="2.5" fill="#2C3E50"/>
        <circle cx="36" cy="32" r="2.5" fill="#2C3E50"/>
        <path d="M29 38C29 38 30 39 32 39C34 39 35 38 35 38" stroke="#FF9999" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M18 28L15 22L20 26" fill="#FFB347"/>
        <path d="M46 28L49 22L44 26" fill="#FFB347"/>
        <ellipse cx="26" cy="34" rx="1.5" ry="1" fill="#FF9999" opacity="0.6"/>
        <ellipse cx="38" cy="34" rx="1.5" ry="1" fill="#FF9999" opacity="0.6"/>
    </svg>`,
    
    `<svg width="80" height="80" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="36" rx="18" ry="20" fill="#FFE66D"/>
        <circle cx="27" cy="32" r="3" fill="#2C3E50"/>
        <circle cx="37" cy="32" r="3" fill="#2C3E50"/>
        <circle cx="27" cy="31" r="1" fill="#FFFFFF"/>
        <circle cx="37" cy="31" r="1" fill="#FFFFFF"/>
        <path d="M28 40C28 40 30 42 32 42C34 42 36 40 36 40" stroke="#FFB347" stroke-width="2" stroke-linecap="round"/>
        <path d="M16 26L12 18L18 24" fill="#FFB347"/>
        <path d="M48 26L52 18L46 24" fill="#FFB347"/>
        <path d="M20 50L18 55L22 52" fill="#FFB347"/>
        <path d="M44 50L46 55L42 52" fill="#FFB347"/>
    </svg>`,
    
    `<svg width="80" height="80" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="38" rx="20" ry="22" fill="#E8A87C"/>
        <circle cx="26" cy="34" r="3" fill="#2C3E50"/>
        <circle cx="38" cy="34" r="3" fill="#2C3E50"/>
        <circle cx="26" cy="33" r="1.2" fill="#FFFFFF"/>
        <circle cx="38" cy="33" r="1.2" fill="#FFFFFF"/>
        <path d="M27 42C27 42 29 44 32 44C35 44 37 42 37 42" stroke="#D4734C" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 24L8 14L16 22" fill="#D4734C"/>
        <path d="M50 24L56 14 L48 22" fill="#D4734C"/>
        <ellipse cx="32" cy="28" rx="4" ry="2" fill="#FFB347"/>
        <path d="M18 52L16 58L20 54" fill="#D4734C"/>
        <path d="M46 52L48 58L44 54" fill="#D4734C"/>
    </svg>`,
    
    `<svg width="80" height="80" viewBox="0 0 64 64" fill="none">
        <path d="M10 40C10 40 15 25 32 20C49 25 54 40 54 40" fill="#8B6F47"/>
        <ellipse cx="32" cy="36" rx="22" ry="18" fill="#A8D8EA"/>
        <circle cx="24" cy="32" r="3.5" fill="#2C3E50"/>
        <circle cx="40" cy="32" r="3.5" fill="#2C3E50"/>
        <circle cx="24" cy="31" r="1.5" fill="#FFFFFF"/>
        <circle cx="40" cy="31" r="1.5" fill="#FFFFFF"/>
        <path d="M26 40C26 40 28 43 32 43C36 43 38 40 38 40" stroke="#7FB3D5" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M8 20L2 8L12 18" fill="#7FB3D5"/>
        <path d="M56 20L62 8L52 18" fill="#7FB3D5"/>
        <ellipse cx="32" cy="26" rx="5" ry="3" fill="#FFE66D"/>
        <path d="M14 50L10 60L18 54" fill="#7FB3D5"/>
        <path d="M50 50L54 60L46 54" fill="#7FB3D5"/>
    </svg>`
];

function renderPet(containerId, stage) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = petSVGs[stage];
    }
}

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    for (let i = 0; i < 6; i++) {
        renderPet(`pet-stage-${i}`, i);
    }
}
