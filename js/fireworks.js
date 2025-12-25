// Basic Fireworks Effect using Canvas or DOM elements? 
// Let's use DOM for consistency with other effects, keeping it simple but nice.

class Firework {
    constructor() {
        this.color = ['#ff0000', '#ffd700', '#ffffff', '#00ff00', '#0000ff'][Math.floor(Math.random() * 5)];
        this.x = Math.random() * window.innerWidth;
        this.y = window.innerHeight;
        this.destinationY = Math.random() * (window.innerHeight * 0.6); // Explode in upper 60%
        this.size = Math.random() * 3 + 2;
        this.speed = Math.random() * 3 + 4;

        this.element = document.createElement('div');
        this.element.classList.add('firework-rocket');
        this.element.style.background = this.color;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size * 3}px`;

        document.body.appendChild(this.element);

        this.animate();
    }

    animate() {
        const move = () => {
            const currentTop = parseFloat(this.element.style.top);

            if (currentTop > this.destinationY) {
                this.element.style.top = `${currentTop - this.speed}px`;
                requestAnimationFrame(move);
            } else {
                this.explode();
            }
        };
        requestAnimationFrame(move);
    }

    explode() {
        this.element.remove();
        createFireworkExplosion(this.x, this.destinationY, this.color);
    }
}

function createFireworkExplosion(x, y, color) {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        particle.style.backgroundColor = color;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Random angle and velocity
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        document.body.appendChild(particle);

        animateParticle(particle, vx, vy);
    }
}

function animateParticle(particle, vx, vy) {
    let opacity = 1;
    let gravity = 0.1;

    function update() {
        vx *= 0.95; // Air resistance
        vy *= 0.95;
        vy += gravity; // Gravity

        const currentLeft = parseFloat(particle.style.left);
        const currentTop = parseFloat(particle.style.top);

        particle.style.left = `${currentLeft + vx}px`;
        particle.style.top = `${currentTop + vy}px`;
        particle.style.opacity = opacity;

        opacity -= 0.02;

        if (opacity > 0) {
            requestAnimationFrame(update);
        } else {
            particle.remove();
        }
    }
    requestAnimationFrame(update);
}

// Start periodic fireworks
function startFireworks() {
    // Launch a firework every 2-5 seconds randomly
    function scheduleNext() {
        const delay = Math.random() * 3000 + 2000;
        setTimeout(() => {
            new Firework();
            scheduleNext();
        }, delay);
    }
    scheduleNext();
}
