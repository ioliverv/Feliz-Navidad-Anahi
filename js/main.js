// ==================== Main Initialization ====================
// This file coordinates all the modules

document.addEventListener('DOMContentLoaded', function () {
    // 1. Create visual effects
    createSnowflakes();           // from snow.js
    createStars();                // from stars.js
    // createMagicalParticles();     // from particles.js - DISABLED
    createLightsFrame();          // from lights.js

    // 2. Generate wreaths
    if (typeof createWreath === 'function') {
        createWreath('wreathLeft');
        createWreath('wreathRight');
    }

    // 3. Setup gift box interaction
    if (typeof setupGiftOpening === 'function') {
        setupGiftOpening();
    }

    // 4. Start fireworks
    if (typeof startFireworks === 'function') {
        startFireworks();
    }

    // 5. Add interactivity
    if (typeof addOrnamentInteractivity === 'function') {
        addOrnamentInteractivity();
    }

    // 6. Initialize page animations
    if (typeof initializePageAnimations === 'function') {
        initializePageAnimations();
    }

    console.log('🎄 Merry Christmas & Happy Holidays!');
    console.log('✨ All modules loaded successfully!');
});

// Helper functions that might be needed globally
function addOrnamentInteractivity() {
    const ornaments = document.querySelectorAll('.ornament');
    ornaments.forEach(ornament => {
        ornament.addEventListener('click', function () {
            createSparkleEffect(this);
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
}

function createSparkleEffect(element) {
    const rect = element.getBoundingClientRect();
    const sparkleCount = 10;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = `${rect.left + rect.width / 2}px`;
        sparkle.style.top = `${rect.top + rect.height / 2}px`;
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = `sparkleExplosion 1s ease-out forwards`;

        const angle = (Math.PI * 2 * i) / sparkleCount;
        const distance = 50 + Math.random() * 50;
        sparkle.style.setProperty('--sparkle-x', `${Math.cos(angle) * distance}px`);
        sparkle.style.setProperty('--sparkle-y', `${Math.sin(angle) * distance}px`);

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

function initializePageAnimations() {
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}

// Add sparkle animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleExplosion {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(0);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate(var(--sparkle-x), var(--sparkle-y)) scale(1);
        }
    }
`;
document.head.appendChild(style);
