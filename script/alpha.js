// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');


    
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}