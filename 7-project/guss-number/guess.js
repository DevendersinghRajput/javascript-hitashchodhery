let randomNumber = parseInt(Math.random() * 100 + 1);

const sumbit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement ('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    sumbit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

// validation guesses 
function validateGuess (guess) {
    if(isNaN (guess)){
        alert('Plese Enter a valid Number')
    }
    else if (guess < 1){
        alert('Plese Enter the more Than  1')
    }
    else if (guess > 100){
        alert('Plese Enter the number more less than / equal to 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Creacte Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    if(guess === randomNumber){
        displayMessage(`congratulations you are Geussed it right number ${randomNumber}`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage (`${guess} Number is TOOO Low, `)
    }
    else if (guess > randomNumber){
        displayMessage (`${guess} Number is TOOO High`)
    }
    
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, &nbsp; `
    numGuess++;

    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage (massage){
    lowOrHi.innerHTML = `<h3>${massage}</h3>`
}

// game end function
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<button id="newGame">Start Game</button>';
    startOver.appendChild(p)
    playGame = false
    newGame()
}

// new game function
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        playGame = true
    })
}