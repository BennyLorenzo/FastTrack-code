const myForm = document.querySelector('form')
// we need to select the form
myForm.addEventListener('submit', event => {
    event.preventDefault();
    const ete = event.target.elements // always returns string
    const firstName = ete.firstName.value
    const lastName = ete.lastName.value
    const age = +ete.age.value // + before = parseInt
    const addAge = +ete.addAge.value
    console.log('Submit pavyko')
    console.log(firstName)
    console.log(lastName)
    console.log(age)
    console.log(addAge)
    console.log(age + addAge)
    document.querySelector('h1').textContent = `Welcome, ${firstName} ${lastName}!`
    document.querySelector('h3').textContent = `You are ${age} years old, in ${addAge} years you will be ${age + addAge} years old!`
})