// ==================== Snowfall Animation ====================
function createSnowflakes() {
    const snowfallContainer = document.getElementById('snowfall');
    const snowflakeCount = 80; // Increased for better snow effect

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random positioning and animation
        const leftPosition = Math.random() * 100;
        const animationDuration = 5 + Math.random() * 10;
        const animationDelay = Math.random() * 5;
        const size = 2 + Math.random() * 4; // 2-6px diameter
        const opacity = 0.5 + Math.random() * 0.5; // 0.5-1.0 opacity

        snowflake.style.left = `${leftPosition}%`;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationDelay = `${animationDelay}s`;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.opacity = opacity;

        snowfallContainer.appendChild(snowflake);
    }
}
