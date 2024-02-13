function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");

}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxy';
    const alphabets = alphabetString.split('');


    const randomanumber = Math.random() * 25;
    const index = Math.round(randomanumber);

    const alphabet = alphabets[index];
    return alphabet;
}