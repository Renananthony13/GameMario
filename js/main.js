const jump = () => {
    const mario = document.querySelector('.mario')
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() =>{

    const pipe = document.querySelector('.pipe')
    const mario = document.querySelector('.mario')

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const pipePosition = pipe.offsetLeft;

    if(pipePosition < 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '20px'

        clearInterval(loop)
    } 

}, 10)

document.addEventListener('keydown', jump) 
