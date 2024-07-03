let username = "Benny"
function greetUser(name = "Please enter your name!") {
    let greeting = "Hello"
    username = "Benvua"
    let message = `${greeting}, ${name}! We're changing your name to ${username}`
    return message
}

console.log(username);
document.querySelector("h1").textContent = greetUser(username);
console.log(greetUser(username));
console.log(username); //username changed within function, updated globally
console.log(greeting); // defined within function, undefined globally

