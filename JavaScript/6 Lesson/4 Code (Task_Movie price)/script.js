let initialPrice = 6
document.querySelector('p span').textContent = `${initialPrice}`;

const selectForm = document.querySelector('form')
selectForm.addEventListener('submit', event => {
    let price = initialPrice
    event.preventDefault()
    const ete = event.target.elements
    const age = +ete.age.value
    // age < 16 ? price = (initialPrice / 2).toFixed(2) : age > 60 ? price = (initialPrice / 3 * 2).toFixed(2) : price;
    // price = ((age < 16 ? 2/3 : age > 60 ? 1/2 : 1) * price).toFixed(2);
    document.querySelector('h2').textContent = `Age: ${age}`;
    document.querySelector('h3').textContent = `Ticket price: ${((age < 16 ? 2/3 : age > 60 ? 1/2 : 1) * price).toFixed(2)} Eur`
})