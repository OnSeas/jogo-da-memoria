/* Feito por Osmar Januario de souza Neto */

const cards = document.querySelectorAll('.card');
let HasFlippedCard = false;
let FirstCard, SecondCard;
let LockBoard = false;

// Função que desabilita cards.
function DisableCards() {
    FirstCard.removeEventListener('click', FlipCard);
    SecondCard.removeEventListener('click', FlipCard);
}

// Função que Desvira cards.
function UnflipCards() {
    LockBoard = true;

    setTimeout(() => {
        FirstCard.classList.remove('flip');
        SecondCard.classList.remove('flip');

        LockBoard = false;
    }, 1500);
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
    if(LockBoard) return; // Se verdadeiro ele tremina a função.

    if(this === FirstCard) return; // Consertando bug de se clicar na mesma carta duas vez das match.

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