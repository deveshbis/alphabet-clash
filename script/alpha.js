// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');


    
// }
function handleKeyboardKeyUpEvents(event){
    const playerPressed = event.key;
    

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const cuurentScore = parseInt(currentScoreText);

        const newScore = cuurentScore + 1;

        currentScoreElement.innerText = newScore;
        continueGame();
        removeBackgroundColorById(expectedAlphabet);
    }
    else{
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;
    }

}
document.addEventListener('keyup',handleKeyboardKeyUpEvents)

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}