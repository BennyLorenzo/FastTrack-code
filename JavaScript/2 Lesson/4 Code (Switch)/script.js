// let a = 2 + 2
// switch(a) {
//     case 1:
//         console.log("Nea")
//         break
//     // starts running from when it's true
//     case 2+2:
//     case 4:
//         console.log("Joa")
//         // break
//     // runs as well if no break and true is above
//     case 2:
//         console.log("Nea")
//         // break

// }

let combo = ""
let times = 3
let name = "Benny"


do {
    combo += name
    times--
} while (times > 0)

console.log(combo)