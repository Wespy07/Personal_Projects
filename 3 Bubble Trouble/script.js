'use strict'

const startGameBtn = document.querySelector('.start-btn')
const startUpPage = document.querySelector('.startup-page')
const bubbleBox = document.querySelector('.bubble-box')
const bubbles = document.querySelector('.bubble')
let hitNumber = document.querySelector('.hit-number')
const timerNumber = document.querySelector('.timer-number')
let scoreNumber = document.querySelector('.score-number')

// default startup numbers 
hitNumber.innerHTML = 0
scoreNumber.innerHTML = 0
timerNumber.innerHTML = 0

// add bubbles to the page
function makeBubbles() {
    let bubbleElements = ''

    for (let i = 1; i < 97; i++) {
        const randomNumber = Math.floor((Math.random() * 10) + 1)
        bubbleElements += `<div class="bubble">${randomNumber}</div>`
    }

    bubbleBox.innerHTML = bubbleElements
}

// random hit number generator function
function randomHitGenerator() {
    hitNumber.innerHTML = Math.floor((Math.random() * 10) + 1)
}


startGameBtn.addEventListener('click', startTheGame)

// bubblebox handler function 
function bubbleHandler(e) {

    // called this function from global space to generate numbered bubbles
    makeBubbles()

    let userScore = +scoreNumber.innerHTML
    if (Number(hitNumber.innerHTML) === Number(e.target.innerHTML)) {
        // console.log(true);
        userScore += 10
        scoreNumber.innerHTML = userScore
    }

    randomHitGenerator() // Generate a new hit number
}


// start game handler function 
function startTheGame() {
    hitNumber.innerHTML = 0
    scoreNumber.innerHTML = 0
    timerNumber.innerHTML = 0
    // remove the startup page
    startUpPage.style.display = 'none'
    makeBubbles()
    randomHitGenerator()


    // timer generator function
    const initialTimerValue = 60
    timerNumber.innerHTML = initialTimerValue
    let timerValue = initialTimerValue

    const myInterval = setInterval(() => {
        timerValue--
        timerNumber.innerHTML = timerValue

        if (timerValue <= 0) {
            const resetBtn = document.createElement('button')
            resetBtn.addEventListener('click', () => {
                startTheGame()
            })
            resetBtn.textContent = 'Restart Game'
            resetBtn.classList.add('reset-btn')

            clearInterval(myInterval)
            bubbleBox.classList.add('game-over')
            bubbleBox.innerHTML = `Game Over!`
            bubbleBox.removeEventListener('click', bubbleHandler)
            bubbleBox.appendChild(resetBtn)
            hitNumber.innerHTML = 0
            // console.log(typeof scoreNumber.innerHTML, scoreNumber.innerHTML);
            if (localStorage.getItem('maxScore')) {
                const userMaxScore = localStorage.getItem('maxScore')
                if (+scoreNumber.innerHTML > userMaxScore) {
                    localStorage.setItem('maxScore', +scoreNumber.innerHTML)
                }
            } else {
                localStorage.setItem('maxScore', +scoreNumber.innerHTML)
            }

            const userHighestScore = document.createElement('div')
            userHighestScore.classList.add('max-score')
            userHighestScore.innerHTML = `Your highest score: <b>${localStorage.getItem('maxScore')}</b>`
            bubbleBox.appendChild(userHighestScore)
        }
    }, 1000);


    bubbleBox.addEventListener('click', bubbleHandler)

}