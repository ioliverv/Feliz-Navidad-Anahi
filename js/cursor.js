// Magical Cursor Trail Effect
class CursorTrail {
    constructor() {
        this.particles = [];
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.createParticle(e.clientX, e.clientY);
        });
        requestAnimationFrame(() => this.render());
    }

    createParticle(x, y) {
        const particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        document.body.appendChild(particle);

        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Random color between gold and white
        const colors = ['#d4af37', '#fffafa', '#f9e5b8'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        this.particles.push({
            element: particle,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1
        });
    }

    render() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.02;

            p.element.style.left = `${p.x}px`;
            p.element.style.top = `${p.y}px`;
            p.element.style.opacity = p.life;
            p.element.style.transform = `scale(${p.life})`;

            if (p.life <= 0) {
                p.element.remove();
                this.particles.splice(i, 1);
            }
        }
        requestAnimationFrame(() => this.render());
    }
}

// Initialize
new CursorTrail();
