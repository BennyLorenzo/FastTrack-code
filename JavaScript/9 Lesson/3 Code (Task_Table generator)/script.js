const form = document.querySelector('form')
const table = document.querySelector('table')

form.addEventListener('submit', event => {
    event.preventDefault()
    table.textContent = ''
    const ete = event.target.elements
    const columns = ete.columns.value
    const rows = ete.rows.value
    for (let i = 0; i < rows; i++ ) {
        const tr = document.createElement('tr')
        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td')
            tr.append(td)
        }
        table.append(tr)
    }
})


