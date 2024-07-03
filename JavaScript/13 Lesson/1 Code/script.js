const names = ['Juozas', 'Aurimas', 'Birutė', 'Karolis', 'Rokas']
names.sort()
console.log(names)

const numbers = [1, 25, 15, 158, 20, 3]
numbers.sort() // sorts as unicode characters - 1 is lowest
console.log(numbers)

numbers.sort((a, b) => a - b) // 1 - 25 = -24 (negative number, no change of position) 25 - 15 = 10 (positive number, change positions)
console.log(numbers)

const planets = [
    { name: 'Jupiter', size: 69911},
    { name: 'Venus', size: 60000512364},
    { name: 'Mars', size: 368877}
]

planets.sort((a, b) => a.name.length - b.name.length)
console.log(planets)