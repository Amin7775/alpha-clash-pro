// function play(){
//     console.log("Clicked")
//     // home
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     // playground
//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}

function continueGame(){
    // step - 1 : generate a random alphabet
    const alphabet= getARandomAlphabet()
    console.log(alphabet)
}