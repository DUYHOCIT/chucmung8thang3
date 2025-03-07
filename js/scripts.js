// src/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Create falling flowers
    function createFlowers() {
        const flowerTypes = ['🌸', '🌺', '🌹', '🌷', '💮', '🏵️'];
        const body = document.querySelector('body');
        
        setInterval(() => {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = Math.random() * 5 + 5 + 's';
            
            body.appendChild(flower);
            
            // Remove flowers after animation
            setTimeout(() => {
                flower.remove();
            }, 10000);
        }, 300);
    }
    
    // Create confetti burst effect
    function createConfettiBurst(x, y) {
        const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3', '#ff1493', '#ff69b4'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 50 + 50;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            confetti.animate([
                { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate(${tx}px, ${ty + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 1000 + 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)',
                fill: 'forwards'
            });
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    }
    
    // Create sparkles
    function createSparkles(x, y) {
        const colors = ['#ffffff', '#ffff00', '#ffd700', '#ff69b4', '#00ffff'];
        
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.boxShadow = `0 0 10px 2px ${colors[Math.floor(Math.random() * colors.length)]}`;
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 20;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            sparkle.animate([
                { transform: 'scale(0)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(1)`, opacity: 0.8 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: Math.random() * 500 + 500,
                easing: 'ease-out',
                fill: 'forwards'
            });
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Create bubbles
    function createBubbles(x, y) {
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = x + 'px';
            bubble.style.top = y + 'px';
            bubble.style.width = Math.random() * 30 + 10 + 'px';
            bubble.style.height = bubble.style.width;
            
            const tx = (Math.random() - 0.5) * 100;
            
            bubble.animate([
                { transform: 'translateY(0) scale(1)', opacity: 0.8 },
                { transform: `translateX(${tx}px) translateY(-100px) scale(1.5)`, opacity: 0 }
            ], {
                duration: Math.random() * 1000 + 2000,
                easing: 'ease-out',
                fill: 'forwards'
            });
            
            document.body.appendChild(bubble);
            
            setTimeout(() => {
                bubble.remove();
            }, 3000);
        }
    }
    
    // Gift box click event
    const giftBox = document.getElementById('giftBox');
    giftBox.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Trigger effects
        createConfettiBurst(x, y);
        createSparkles(x, y);
        createBubbles(x, y);
        
        // Create a special message
        const specialMessage = document.createElement('div');
        specialMessage.style.position = 'fixed';
        specialMessage.style.bottom = '40px';
        specialMessage.style.right = '30px';
        specialMessage.style.background = 'rgba(255, 255, 255, 0.9)';
        specialMessage.style.padding = '15px';
        specialMessage.style.borderRadius = '10px';
        specialMessage.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        specialMessage.style.maxWidth = '200px';
        specialMessage.style.textAlign = 'center';
        specialMessage.style.fontSize = '16px';
        specialMessage.style.color = '#be185d';
        specialMessage.style.opacity = '0';
        specialMessage.innerHTML = '❤️ Chúc bạn luôn rạng rỡ và hạnh phúc mỗi ngày! ❤️';
        
        document.body.appendChild(specialMessage);
        
        specialMessage.animate([
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 500,
            fill: 'forwards'
        });
        
        // Remove message after some time
        setTimeout(() => {
            specialMessage.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 500,
                fill: 'forwards'
            });
            setTimeout(() => {
                specialMessage.remove();
            }, 500);
        }, 3000);
    });
    
    // Start flower effects
    createFlowers();
});