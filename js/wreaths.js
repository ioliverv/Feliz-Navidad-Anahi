// ==================== Generative Wreath ====================
function createWreath(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = ''; // Clear previous

    const radius = container.offsetWidth / 2;
    const centerX = radius;
    const centerY = radius;

    // 1. Create Lush Pine Base (More density, layers)
    const layers = 3;
    const leavesPerLayer = 80;

    for (let l = 0; l < layers; l++) {
        for (let i = 0; i < leavesPerLayer; i++) {
            const leaf = document.createElement('div');
            leaf.classList.add('wreath-leaf');

            // Randomize angle
            const angle = (i / leavesPerLayer) * Math.PI * 2 + (Math.random() * 0.1);

            // Layering radius: vary from inner to outer
            const layerOffset = l * 10;
            const randomOffset = Math.random() * 15 - 7.5;
            const r = (radius * 0.65) + layerOffset + randomOffset;

            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;

            // Rotation: Tangent + random chaos for natural look
            const rotation = (angle * 180 / Math.PI) + 90 + (Math.random() * 40 - 20);

            leaf.style.left = `${x}px`;
            leaf.style.top = `${y}px`;
            leaf.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

            // Varied Greens
            const darkGreen = `rgb(${10 + Math.random() * 20}, ${50 + Math.random() * 40}, ${10 + Math.random() * 20})`;
            const lightGreen = `rgb(${30 + Math.random() * 30}, ${80 + Math.random() * 50}, ${30 + Math.random() * 30})`;
            leaf.style.background = `linear-gradient(to top, ${darkGreen}, ${lightGreen})`; // Pine needle gradient

            container.appendChild(leaf);
        }
    }

    // 2. Berries (Clusters)
    const clusterCount = 8;
    for (let i = 0; i < clusterCount; i++) {
        const angle = (i / clusterCount) * Math.PI * 2 + Math.random() * 0.5;
        const r = radius * 0.75;

        // Cluster center
        const cx = centerX + Math.cos(angle) * r;
        const cy = centerY + Math.sin(angle) * r;

        // Add 3 berries per cluster
        for (let b = 0; b < 3; b++) {
            const berry = document.createElement('div');
            berry.classList.add('wreath-berry');
            const bx = cx + (Math.random() * 10 - 5);
            const by = cy + (Math.random() * 10 - 5);
            berry.style.left = `${bx}px`;
            berry.style.top = `${by}px`;
            container.appendChild(berry);
        }
    }

    // 3. Ornaments (Spheres)
    const ornamentCount = 8;
    const ornamentColors = [
        'radial-gradient(circle at 30% 30%, #ff4d4d, #990000)', // Red
        'radial-gradient(circle at 30% 30%, #ffd700, #b8860b)', // Gold
        'radial-gradient(circle at 30% 30%, #e0e0e0, #808080)'  // Silver
    ];

    for (let i = 0; i < ornamentCount; i++) {
        const orb = document.createElement('div');
        orb.classList.add('wreath-ornament');

        const angle = (i / ornamentCount) * Math.PI * 2 + 0.5; // Offset from clusters
        const r = radius * 0.7;

        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        orb.style.left = `${x}px`;
        orb.style.top = `${y}px`;
        orb.style.background = ornamentColors[i % ornamentColors.length];

        container.appendChild(orb);
    }

    // 4. Poinsettias (Red Flowers) - Positioned in center
    const flowerCount = 8;
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.classList.add('wreath-flower');

        const angle = (i / flowerCount) * Math.PI * 2 + 0.2;
        const r = radius * 0.55; // Moved closer to center

        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        // Create petals
        for (let p = 0; p < 5; p++) {
            const petal = document.createElement('div');
            petal.classList.add('flower-petal');
            petal.style.transform = `rotate(${p * 72}deg)`;
            flower.appendChild(petal);
        }

        // Center of flower
        const center = document.createElement('div');
        center.classList.add('flower-center');
        flower.appendChild(center);

        container.appendChild(flower);
    }

    // 5. Lights
    const lightCount = 16;
    const lightColors = ['#ff0000', '#ffd700', '#00ff00', '#0000ff'];

    for (let i = 0; i < lightCount; i++) {
        const light = document.createElement('div');
        light.classList.add('wreath-light');

        const angle = (i / lightCount) * Math.PI * 2; // Evenly distributed lights
        const r = radius * 0.8; // Middle of wreath

        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        light.style.left = `${x}px`;
        light.style.top = `${y}px`;
        light.style.backgroundColor = lightColors[i % lightColors.length];
        light.style.boxShadow = `0 0 5px ${light.style.backgroundColor}`;
        light.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(light);
    }

    // 5. Red Bow at Bottom (Detailed HTML)
    const bow = document.createElement('div');
    bow.classList.add('wreath-bow');

    const knot = document.createElement('div');
    knot.classList.add('knot');
    bow.appendChild(knot);

    const ribLeft = document.createElement('div');
    ribLeft.classList.add('ribbon-left');
    bow.appendChild(ribLeft);

    const ribRight = document.createElement('div');
    ribRight.classList.add('ribbon-right');
    bow.appendChild(ribRight);

    container.appendChild(bow);

    // 6. Centerpiece (Hanging Bell/Ornament)
    const centerpiece = document.createElement('div');
    centerpiece.classList.add('wreath-centerpiece');
    container.appendChild(centerpiece);
}


