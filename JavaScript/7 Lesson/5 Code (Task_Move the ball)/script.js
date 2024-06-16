const ball = document.querySelector('#ball')

document.addEventListener('keydown', () => ball.style.bottom = '600px')
document.addEventListener('keyup', () => ball.style.bottom = '40px')
ball.style.transition = 'all 3s'


