const boxes = document.querySelectorAll('.box')
const info = document.querySelector('h2')
const resetBtn = document.querySelector('.reset-btn')

let turn = false
let playGame = true

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const winArray = Array(9).fill(null)


function checkWinner(){
    if(
        (winArray[0] !== null && winArray[0] === winArray[1] && winArray[1] === winArray[2]) ||
        (winArray[3] !== null && winArray[3] === winArray[4] && winArray[4] === winArray[5]) ||
        (winArray[6] !== null && winArray[6] === winArray[7] && winArray[7] === winArray[8]) ||
        (winArray[0] !== null && winArray[0] === winArray[3] && winArray[3] === winArray[6]) ||
        (winArray[1] !== null && winArray[1] === winArray[4] && winArray[4] === winArray[7]) ||
        (winArray[2] !== null && winArray[2] === winArray[5] && winArray[5] === winArray[8]) ||
        (winArray[0] !== null && winArray[0] === winArray[4] && winArray[4] === winArray[8]) ||
        (winArray[2] !== null && winArray[2] === winArray[4] && winArray[4] === winArray[6])
    ){
        if(turn){
            info.innerHTML = 'The winner is player O'
            boxes.forEach((elem)=> {
                elem.style.cursor='not-allowed'
            })
        } else {
            info.innerHTML = 'The winner is player X'
            boxes.forEach((elem)=> {
                elem.style.cursor='not-allowed'
            })
        }

        playGame = false
    }
    if(!winArray.includes(null)){
        info.innerHTML = 'It\'s a Draw.'
    }
}

boxes.forEach((elem) => {
    elem.addEventListener('click', (e) => {

        if(!playGame){
            return
        }

        let value = e.target
        let id = Number(e.target.id)


        if (value.innerHTML !== '') {
            return
        } else if (turn) {
            value.innerHTML = 'X'
            winArray[id] = 'X'
            info.innerHTML = 'Player O\'s Turn'
            turn = false
        } else {
            value.innerHTML = 'O'
            winArray[id] = 'O'
            info.innerHTML = 'Player X\'s Turn'
            turn = true
        }
        console.log(winArray);

        checkWinner()
    })
})

resetBtn.addEventListener('click', () => {
    window.location.reload();
})