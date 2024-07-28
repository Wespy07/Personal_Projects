const bubbleBox = document.querySelector('.bubble-box')
const bubbles = document.querySelector('.bubble')
let hitNumber = Number(document.querySelector('.hit-number').innerHTML)
const timerNumber = Number(document.querySelector('.timer-number').innerHTML)
let scoreNumber = Number(document.querySelector('.score-number').innerHTML)



function makeBubbles() {
    let bubbleElements = ''
    for (let i = 1; i < 97; i++) {
        const randomNumber = Math.floor((Math.random() * 10) + 1)
        bubbleElements += `<div class="bubble">${randomNumber}</div>`
    }
    bubbleBox.innerHTML = bubbleElements
}

makeBubbles()

bubbleBox.addEventListener('click', (e) => {
    makeBubbles()
    console.log(typeof e.target.innerHTML, e.target.innerHTML);

    if (hitNumber === Number(e.target.innerHTML)) {
    }

})

