// 1
console.log(`_____________________________________`)
console.log(`1 Task`)

let fruit = ['banana', 'apple', 'orange']
let vegetables = ['tomato', 'cucumber', 'potato']
let object = {
    subject: 'methods'
}
let concatArray = fruit.concat(vegetables, 'sandwich', 22, object)
console.log(concatArray)

// 2
console.log(`_____________________________________`)
console.log(`2 Task`)
let word = 'joNaS'
normalize = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
console.log(`${word} => ${normalize(word)}`)

// 3
console.log(`_____________________________________`)
console.log(`3 Task`)
alertName = name => alert(name)
consoleName = name => console.log(name)
function coreFunction (name, callback) {
    const capitalizeNameShort = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    callback(capitalizeNameShort)
}
coreFunction('laURyNaS', consoleName)

// 4
console.log(`_____________________________________`)
console.log(`4 Task`)
let accords = ['D', 'G', 'C', 'C7', 'F']

addSeven = item => item.charAt(item.length - 1) != '7' ? item += '7' : item

function arrayItem (array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i])
    }
}

arrayItem(accords, addSeven)
console.log(accords)

// 5
console.log(`_____________________________________`)
console.log(`5 Task`)
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6]
let index = 0
// numbers.forEach(element => {
//     let p = document.createElement('p')
//     p.textContent = `Index Nr: ${index}, value: ${element}`
//     document.querySelector('body').append(p)
//     index++
// });

const indexedNumbers = element => {
    let p = document.createElement('p')
    p.textContent = `Index Nr: ${index}, value: ${element}`
    document.querySelector('body').append(p)
    index++
}

numbers.forEach(indexedNumbers)