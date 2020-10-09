/* Feito por Osmar Januario de souza Neto */

const cards = document.querySelectorAll('.card');
let HasFlippedCard = false;
let FirstCard, SecondCard;

// Função que desabilita cards.
function DisableCards() {
    FirstCard.removeEventListener('click', FlipCard);
    SecondCard.removeEventListener('click', FlipCard);
}

// Função que Desvira cards.
function UnflipCards() {
    setTimeout(() => {
        FirstCard.classList.remove('flip');
        SecondCard.classList.remove('flip');
    }, 1000);
}

// Função que verifica se há match entre as cartas.
function CheckForMatch() {

    if(FirstCard.dataset.card === SecondCard.dataset.card) { // Verifica se as cartas são iguais.
        DisableCards();
        return;
    }

    UnflipCards();
}

// Função que vira as cartas.
function FlipCard() {

    this.classList.add('flip'); // Adiciona a classe flip para o elemento que chamar a função.

    if(!HasFlippedCard) { // Verificando se é a primeira carta a ser clicada.
        HasFlippedCard = true;
        FirstCard = this;
        return; // termina a função.
    }

    SecondCard = this; // Só chega até aqui se for a segunda carta clicada.
    CheckForMatch();
    HasFlippedCard = false;
}

// Percorre o array cards que contém todos os cards vendo qual foi clicado.
cards.forEach((card) => {
    card.addEventListener('click', FlipCard);
})