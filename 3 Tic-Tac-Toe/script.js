const block1 = document.querySelector('.block1')
const block2 = document.querySelector('.block2')
const block3 = document.querySelector('.block3')
const block4 = document.querySelector('.block4')
const block5 = document.querySelector('.block5')
const block6 = document.querySelector('.block6')
const block7 = document.querySelector('.block7')
const block8 = document.querySelector('.block8')
const block9 = document.querySelector('.block9')

block1.addEventListener('click', () => {
    console.log('block 1');
    if (block1.firstElementChild.innerHTML === '') {
        block1.firstElementChild.innerHTML = '&cir;'
    } else {
        block1.firstElementChild.innerHTML = ''
    }
})

block2.addEventListener('click', () => {
    console.log('block 2');
})

block3.addEventListener('click', () => {
    console.log('block 3');
})

block4.addEventListener('click', () => {
    console.log('block 4');
})

block5.addEventListener('click', () => {
    console.log('block 5');
})

block6.addEventListener('click', () => {
    console.log('block 6');
})

block7.addEventListener('click', () => {
    console.log('block 7');
})

block8.addEventListener('click', () => {
    console.log('block 8');
})

block9.addEventListener('click', () => {
    console.log('block 9');
})
