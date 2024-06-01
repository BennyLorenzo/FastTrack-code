const legalAge = 20
const clientAge = 18

if (clientAge >= legalAge) {
    console.log("Come in!")
}
else {
    console.log("Entrance denied.")
}

const name = "Benny"
const nameLength = name.length

if (nameLength > 6) {
    console.log("That's a long name!")
}
else {
    console.log("Nice name.")
}

const myAge = 28
if (myAge > 100 || myAge < 1) {
    console.log("Invalid age!")
}
else if (myAge < 19) {
    console.log("Child")
}
else {
    console.log("Adult")
}

const car = "Lotus"
const VW = ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"];
const BMW = ["BMW", "Mini", "Rolls-Royce"];

if (VW.includes(car)) {
    console.log(car + " belongs to VW group.")
}
else if (BMW.includes(car)) {
    console.log(car + " belongs to BMW group.")
}
else {
    console.log("Your car is exotic!")
}