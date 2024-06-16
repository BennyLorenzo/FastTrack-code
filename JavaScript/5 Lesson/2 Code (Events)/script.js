// document.querySelector('#clickMe').addEventListener('click', clicked)
// function clicked() {
//     console.log("Thanks for clicking!")
// }

// document.querySelector('#plsNoClick').addEventListener('click', plsNoClick)
// function plsNoClick() {
//     console.log("PLEASE NO CLICK!!!!")
// }

document.querySelector(".name").addEventListener('click', getName)
function getName () {
    alert("Your name is Benny!")
}

document.querySelector(".answer").addEventListener('click', answer)

function answer () {
    document.querySelector('p').textContent = "ayy lmao";
}
