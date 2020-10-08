/* Feito por Osmar Januario de souza Neto */

const cards = document.querySelectorAll('.card');

// Função que vira as cartas.

function FlipCard() {
    this.classList.toggle('flip'); // Adiciona a classe flip para o elemento que chamar a função.
}

cards.forEach((card) => {
    card.addEventListener('click', FlipCard)
})