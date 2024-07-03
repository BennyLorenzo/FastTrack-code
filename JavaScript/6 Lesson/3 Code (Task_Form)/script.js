const selectForm = document.querySelector('form')
selectForm.addEventListener('submit', event => {
    event.preventDefault()
    const ete = event.target.elements
    const name = ete.name.value
    const age = +ete.age.value
    const email = ete.email.value
    document.querySelector('h2').textContent = `Name: ${name}, age: ${age}, email: ${email}`
})