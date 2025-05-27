let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorAtual = "X";
let jogoAtivo = true;
const mensagem = document.getElementById("mensagem");

const combinacoesVitoria = [
    [0,1,2], [3,4,5], [6,7,8], // Linhas
    [0,3,6], [1,4,7], [2,5,8], // Colunas
    [0,4,8], [2,4,6]           // Diagonais
];

function checarVencedor() {
    for (let condicao of combinacoesVitoria) {
        const [a, b, c] = condicao;
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            mensagem.textContent = `Jogador ${tabuleiro[a]} venceu!`;
            jogoAtivo = false;
            return;
        }
    }

    if (!tabuleiro.includes("")) {
        mensagem.textContent = "Empate!";
        jogoAtivo = false;
    }
}

function clicarCasa(event) {
    const index = event.target.getAttribute('data-index');

    if (tabuleiro[index] !== "" || !jogoAtivo) return;

    tabuleiro[index] = jogadorAtual;
    event.target.textContent = jogadorAtual;

    checarVencedor();

    if (jogoAtivo) {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        mensagem.textContent = `Vez do jogador: ${jogadorAtual}`;
    }
}

function reiniciarJogo() {
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogadorAtual = "X";
    jogoAtivo = true;
    mensagem.textContent = "Vez do jogador: X";

    document.querySelectorAll('.casa').forEach(casa => {
        casa.textContent = "";
    });
}

document.querySelectorAll('.casa').forEach(casa => {
    casa.addEventListener('click', clicarCasa);
});
