// Užduoties tikslas: paspaudus mygtuką, iššoka paslėptas langas, ir bendras ekrano fonas užtamsėja. Paspaudus pele ant užtamsinto fono, arba kamputyje esantį x – langas vėl dingsta.

// Naudojama: events, funkcijos ir element.style savybės, o html ir css nebekeičiami.

let modalOpen = false

function openModal () {
    document.querySelector('.modal-window').style.display = 'block'
    document.querySelector('.overlay').style.display = 'block'
    modalOpen = true
}

function closeModal() {
    document.querySelector('.modal-window').style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
}

function escapePress(keyboardButton) {
    if (keyboardButton.key == "Escape" && modalOpen == true) {
        closeModal();
        modalOpen = false
    }
}

document.querySelector('.show-modal').addEventListener('click', openModal)
document.querySelector('.close-modal').addEventListener('click', closeModal)
document.querySelector('.overlay').addEventListener('click', closeModal)
document.body.addEventListener('keydown', escapePress)