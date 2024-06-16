// Objektas turi savybes ir metodus
// Mašinos objekto savybės - keturios durys, raudona spalva, kabrioletas
// Mašinos metodai - keturios durys atsidaro, stogas nusikelia

// Object - properties (variables) and methods (functions)

const person = {
    firstName: 'Benny',
    surName: 'Lorenzo',
    age: 28,
    dude: true,
    greeting () {
        console.log('How you doin?')
    },
    farewell () {
        console.log(`Bye, ${person.firstName}`)
    }
}

console.log(person.firstName)
person.greeting()
person.farewell()
console.log('__________________________________________')

const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => (b !== 0) ? a / b : 'Error - division by 0 not possible.'
}

console.log(calculator.add(10,15))
console.log(calculator.mult(10,15))
console.log(calculator.div(10,0))