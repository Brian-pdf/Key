document.addEventListener('DOMContentLoaded', function() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let secretKey = getRandomLetter();

    function getRandomLetter() {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }

    function handleKeyPress(event) {
        const keyPressed = event.key.toLowerCase();

        if (keyPressed === secretKey) {
            const message = document.createElement('p');
            message.textContent = 'SECRET KEY PRESSED';
            document.body.appendChild(message);

        
            secretKey = getRandomLetter();
        }
    }

    document.body.addEventListener('keydown', handleKeyPress);
});