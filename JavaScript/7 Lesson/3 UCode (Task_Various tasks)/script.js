// 1
const inputSize1 = document.querySelector('#size1')
inputSize1.addEventListener('input', () =>  {
    const size1 = +inputSize1.value;
    let output = ''
    for(let i = 0; i < size1 - 1;i++) {
        output += 'L<br>'
    }
    for(let i = 0; i < size1;i++) {
        output += 'L'
    }
    document.querySelector('#output1').innerHTML = output;
})

// 2
const inputSize2 = document.querySelector('#size2')
inputSize2.addEventListener('input', () =>  {
    const size2 = +inputSize2.value;
    let output = ''
    if (size2 < 4) {
        document.querySelector('#output2').innerHTML = "Įveskite daugiau, nei 3!"
    }
    else {
        for(let i = 0; i < size2 - 1;i++) {
            output += 'C'
        }
        for(let i = 0; i < size2 - 1;i++) {
            output += 'C<br>'
        }
        for(let i = 0; i < size2;i++) {
            output += 'C'
        }
        document.querySelector('#output2').innerHTML = output;
    }

})

// 3
const inputName = document.querySelector('#name')
let output = ''
inputName.addEventListener('blur' , () => {
    const name = inputName.value
    output === '' ? output += name : output = ', ' + name;
    document.querySelector('#output3').innerHTML += output
})
