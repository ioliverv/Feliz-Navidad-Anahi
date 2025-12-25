// ==================== Magical Particles ====================
function createMagicalParticles() {
    const particlesContainer = document.getElementById('magicalParticles');
    if (!particlesContainer) return;

    setInterval(() => {
        const particle = document.createElement('div');
        particle.classList.add('magic-particle');

        // Random starting position at bottom
        const startX = Math.random() * window.innerWidth;
        particle.style.left = `${startX}px`;
        particle.style.bottom = '0';

        // Random drift amount
        const drift = (Math.random() - 0.5) * 100; // -50 to 50 px
        particle.style.setProperty('--drift', `${drift}px`);

        // Random duration between 8-15 seconds
        const duration = 8 + Math.random() * 7;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }, 200); // Create new particle every 200ms
}
