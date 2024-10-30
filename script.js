let counter = 0;

function incrementCounter() {
    counter++;
    document.getElementById('counter').innerText = `Compteur: ${counter}`;
    animateHearts();
}

function animateHearts() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);
    
    // Animation pour le cœur qui monte
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}vw`; // Positionnement aléatoire en largeur
    heart.style.bottom = '0px';
    heart.style.animation = 'fire 1s ease-in forwards';
    
    // Supprimer le cœur après l'animation
    setTimeout(() => {
        heart.remove();
    }, 1000);
}
