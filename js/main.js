/* Feito por Osmar Januario de souza Neto */


// Variáveis
const cards = document.querySelectorAll('.card');
let HasFlippedCard = false;
let FirstCard, SecondCard;
let LockBoard = false;

// Função que reseta variáveis
function ResetBoard() {
    [HasFlippedCard, LockBoard] = [false, false];
    [FirstCard, SecondCard] = [null, null];
}

// Função que desabilita cards.
function DisableCards() {
    FirstCard.removeEventListener('click', FlipCard);
    SecondCard.removeEventListener('click', FlipCard);

    ResetBoard();
}

// Função que Desvira cards.
function UnflipCards() {
    LockBoard = true;

    setTimeout(() => {
        FirstCard.classList.remove('flip');
        SecondCard.classList.remove('flip');

        ResetBoard();
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

// Função que embaralha as cartas
(function Shuffle() {
    cards.forEach((card) => {
        let RandomPosition = Math.floor(Math.random() * 12);
        card.style.order = RandomPosition;
    })
})(); /* immediately invoked function: função dentro do parentese, com parenteses de função na frente, 
sendo chamada toda vez que o código começa. */

// Percorre o array cards que contém todos os cards vendo qual foi clicado.
cards.forEach((card) => {
    card.addEventListener('click', FlipCard);
})