// ==================== Gift Box Opening ====================


// ==================== Gift Box Opening ====================
function setupGiftOpening() {
    const giftBoxContainer = document.getElementById('giftBoxContainer');
    const cardContainer = document.getElementById('cardContainer');
    const bgMusic = document.getElementById('bgMusic');
    const mainMessageElement = document.querySelector('.main-message');



    if (giftBoxContainer && cardContainer) {
        giftBoxContainer.addEventListener('click', function (e) {
            // Play Music
            if (bgMusic) {
                bgMusic.volume = 0.5;
                bgMusic.play().catch(error => console.log("Audio play failed:", error));
            }

            // Trigger Confetti Explosion
            createConfettiExplosion(e.clientX, e.clientY);

            // Add open class to trigger animation
            this.classList.add('open');

            // Show the card after box opens
            setTimeout(() => {
                cardContainer.classList.add('visible');

                // Start Typewriter effect
                if (mainMessageElement) {
                    mainMessageElement.style.opacity = '1';
                    // Reset to empty but keep layout logic ready
                    const fullHTML = mainMessageElement.innerHTML;
                    mainMessageElement.innerHTML = '';

                    typeWriterHTML(mainMessageElement, fullHTML, 55); // 75ms per char - slower natural pace
                }
            }, 800);
        });
    }
}

// ==================== HTML-Aware Typewriter ====================
function typeWriterHTML(element, html, speed) {
    let t = 0;
    let charIndex = 0;
    let scrollCounter = 0; // Contador para reducir la frecuencia del scroll

    // Create a temporary container to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Función optimizada para scroll suave
    function smoothScroll() {
        const card = document.querySelector('.card');
        if (card) {
            requestAnimationFrame(() => {
                card.scrollTop = card.scrollHeight;
            });
        }
    }

    // Recursively type nodes
    function typeNode(node, targetParent) {
        if (node.nodeType === Node.TEXT_NODE) {
            // Normalizar espacios: reemplaza saltos de línea y múltiples espacios por uno solo
            // Esto evita que la indentación del código cause pausas largas
            const text = node.textContent.replace(/\s+/g, ' ');

            // Si después de limpiar no queda texto (o solo un espacio irrelevante), terminamos rápido
            if (text.length === 0) return Promise.resolve();

            let i = 0;

            return new Promise(resolve => {
                function typeChar() {
                    if (i < text.length) {
                        targetParent.appendChild(document.createTextNode(text.charAt(i)));

                        // Auto-scroll logic optimizado - solo cada 3 caracteres
                        scrollCounter++;
                        if (scrollCounter % 3 === 0) {
                            smoothScroll();
                        }

                        i++;
                        // Velocidad constante para mayor fluidez, sin random
                        setTimeout(typeChar, speed);
                    } else {
                        resolve();
                    }
                }
                typeChar();
            });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            return new Promise(async resolve => {
                const newElement = document.createElement(node.tagName);

                // Copy attributes
                Array.from(node.attributes).forEach(attr => {
                    newElement.setAttribute(attr.name, attr.value);
                });

                targetParent.appendChild(newElement);

                // Recursively type children
                const children = Array.from(node.childNodes);
                for (const child of children) {
                    await typeNode(child, newElement);
                }
                resolve();
            });
        } else {
            return Promise.resolve();
        }
    }

    // Start typing process
    (async function () {
        // Add cursor class
        element.classList.add('typing-cursor');

        const children = Array.from(tempDiv.childNodes);
        for (const child of children) {
            await typeNode(child, element);
        }

        // Remove cursor when done
        element.classList.remove('typing-cursor');
    })();
}


