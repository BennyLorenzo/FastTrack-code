const getParagraph = document.querySelector('p')

document.addEventListener("mouseover", () => getParagraph.textContent = "Mouse over");

document.addEventListener("mouseout", () => getParagraph.textContent = "Mouse out")

document.addEventListener("click", () => getParagraph.textContent = "Clicked")