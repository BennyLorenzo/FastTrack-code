const curses = ["ch", "x", "le", "lia", "zd", "ib", "yb"]

const form = document.querySelector('form')
const output = document.querySelector('.output')

form.addEventListener('submit', event => {
  event.preventDefault()
  let input = curseword.value
  for(let curse of curses) {
    input = input.replace(curse, "😯")
  }
  output.textContent = input
  }
)