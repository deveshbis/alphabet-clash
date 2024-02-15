
function handleKeyboardKeyUpEvents(event) {
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

    
        continueGame();
        removeBackgroundColorById(expectedAlphabet);
    }
    else {
        const currentLife = getTextElementValueById('current-life')
        const updatedlife = currentLife - 1;
        setTextElementValueById('current-life', updatedlife);

        if(updatedlife == 0){
            gameOver();
        }
    }

}
document.addEventListener('keyup', handleKeyboardKeyUpEvents)

function continueGame() {
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    const latScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', latScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}