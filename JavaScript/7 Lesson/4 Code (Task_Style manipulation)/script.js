document.querySelector('button').addEventListener('click', () => {
    document.querySelector('button').style.backgroundColor = 'red'
    document.querySelector('button').style.color = 'white'
})

document.querySelector('button').addEventListener('blur', () => {
    document.querySelector('button').style.backgroundColor = '#f0f0f0'
    document.querySelector('button').style.color = 'black'
})

document.querySelector('#button1').addEventListener('click', () => {
    document.querySelector('#paragraph1').style.backgroundColor = 'coral'
    document.querySelector('#paragraph1').style.color = 'purple'
})

document.querySelector('#button2').addEventListener('click', () => {
    document.querySelector('#paragraph2').textContent += " Extra text."
})

document.querySelector('#button3').addEventListener('click', () => {
    document.querySelector('#paragraph3').style.backgroundColor = 'coral'
})

document.querySelector('#button4').addEventListener('click', () => {
    document.querySelector('#paragraph4').textContent += " Extra text."
})


