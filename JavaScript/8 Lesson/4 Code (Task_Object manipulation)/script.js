const person = {
    name: "Rosa",
    age: 120,
    alive: false,
    interests: ["swimming", "cards"]
};

person.name = "Benny"
person.age = Math.floor(Math.random() * 101 + 20)
if (person.age < 100) {
    person.alive = !person.alive;
    person.interests.push('enjoying life')
}
else {
    console.log(`${person.name} is ${person.age} years old. He dead...`)
}

console.log(person)