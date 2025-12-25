// Confetti Explosion Effect
function createConfettiExplosion(x, y) {
    const colorCount = 60; // Increased particle count for "explosion"
    // White shades for "Christmas explosion"
    const colors = ['#ffffff', '#f0f8ff', '#e6e6fa', '#fffafa', '#f5f5f5'];

    for (let i = 0; i < colorCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('confetti');
        document.body.appendChild(particle);

        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Random velocity
        const velocity = {
            x: (Math.random() - 0.5) * 15,
            y: (Math.random() - 1) * 15
        };

        const rotation = Math.random() * 360;

        animateConfetti(particle, velocity, rotation);
    }
}

function animateConfetti(particle, velocity, rotation) {
    let opacity = 1;
    let gravity = 0.5;

    function update() {
        velocity.y += gravity;

        const currentLeft = parseFloat(particle.style.left);
        const currentTop = parseFloat(particle.style.top);

        particle.style.left = `${currentLeft + velocity.x}px`;
        particle.style.top = `${currentTop + velocity.y}px`;
        particle.style.transform = `rotate(${rotation}deg)`;
        particle.style.opacity = opacity;

        opacity -= 0.01;
        rotation += 5;

        if (opacity > 0) {
            requestAnimationFrame(update);
        } else {
            particle.remove();
        }
    }

    requestAnimationFrame(update);
}
