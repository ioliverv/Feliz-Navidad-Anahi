// ==================== Background Stars ====================
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random positioning and animation
        const topPosition = Math.random() * 100;
        const leftPosition = Math.random() * 100;
        const animationDelay = Math.random() * 3;
        const size = 1 + Math.random() * 2;

        star.style.top = `${topPosition}%`;
        star.style.left = `${leftPosition}%`;
        star.style.animationDelay = `${animationDelay}s`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        starsContainer.appendChild(star);
    }
}
