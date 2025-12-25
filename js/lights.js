// ==================== Lights Frame Generator ====================
function createLightsFrame() {
    const colors = ['red', 'gold', 'green', 'blue'];
    const strings = document.querySelectorAll('.lights-string');

    strings.forEach(string => {
        // Calculate number of lights based on width/height
        const isVertical = string.classList.contains('left') || string.classList.contains('right');
        const length = isVertical ? window.innerHeight : window.innerWidth;
        const count = Math.floor(length / 120);

        for (let i = 0; i < count; i++) {
            const light = document.createElement('div');
            light.classList.add('light-bulb');

            // Assign random color
            const color = colors[i % colors.length];
            light.classList.add(color);

            // Random delay for twinkling
            light.style.animationDelay = `${Math.random() * 2}s`;

            string.appendChild(light);
        }
    });
}
