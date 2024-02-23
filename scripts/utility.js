function hideElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

function addBgColorById(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('bg-orange-400')
    element.classList.add('text-black')
}

function getARandomAlphabet(){
    // get or create an alphabet arr
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split("");
    // get a random index between 0 - 25
    let randomNumber = Math.random()*25
    let index = Math.round(randomNumber)
    // console.log(alphabets[index])
    // alphabet
    const alphabet = alphabets[index]
    return alphabet
}