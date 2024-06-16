let room = ["bed", "chair", "lamp", "desk", "carpet"];

for (let i = 0; i < room.length; i++) {
    console.log(room[i]);
}
console.log("")

room[room.length] = "wardrobe";

console.log(room);
console.log("")

for(let furniture of room) {
    console.log(furniture);
}

let roomArraySelected = document.querySelector('#roomArray');

// for (i = 0; i < room.length; i++) {
//     roomArraySelected.innerHTML += room[i] + "<br>";
// }

for(let furniture of room) {
    roomArraySelected.innerHTML += furniture + "<br>";
}


