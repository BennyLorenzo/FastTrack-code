const input = document.querySelector('input')
const output = document.querySelector('.output')

input.addEventListener("focusout", (event) => {
  const inputValue = input.value
  output.style.width = `${inputValue}px`;
  output.style.height = `${inputValue}px`
  input.style.backgroundColor = "lightgreen"
})
