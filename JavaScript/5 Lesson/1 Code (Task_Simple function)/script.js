function compareNumbers (a, b) {
    if(a > b) {
        return `${a} is more than ${b}`
    }
    else if (a < b) {
        return `${a} is less than ${b}`
    }
    else {
        return `${a} is equal to ${b}`
    }
}

// console.log(compareNumbers(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)))

console.log(compareNumbers(5, 5))