const x = 3**3
const y = +"3"


console.log(x)
console.log(typeof(y))
console.log(x > y && y < x) 
console.log(x > y && y > x) 
console.log(x > y || y > x) 

if (x > 10) {
    console.log(x + " is more than 10!")
}
else {
    console.log("It's less...")
}

const weather = "Sunny"

if (weather === "Rainy") {
    console.log("Grab an umbrella!")
}
else if (weather === "Windy") {
    console.log("Grab a jacket!")
}
else {
    console.log("Enjoy the sun!")
}