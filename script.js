const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(result)) {
        result = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = result;
});

function checkGuess(choice) {
    if (generatedNumber === null) {
        gameMessage.textContent = 'Gere um número primeiro!';
    } else {
        const isEven = generatedNumber % 2 === 0;
        if ((choice === 'par' && isEven) || (choice === 'impar' && !isEven)) {
            gameMessage.textContent = 'Você acertou!';
            gameMessage.style.color = 'green';
        } else {
            gameMessage.textContent = 'Você errou!';
            gameMessage.style.color = 'red';
        }
    }
    gameResult.style.display = 'block';
}

parButton.addEventListener('click', () => checkGuess('par'));
imparButton.addEventListener('click', () => checkGuess('impar'));