let tentativas = 0;
TextosIniciais();
let ListaDeNumeros = [];
let LimiteElemt = 10;
let NumeroSecreto = Sorteio();
document.getElementById('reiniciar').removeAttribute('disabled');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == NumeroSecreto) {
        tentativas++;
        MostrarTexto('h1', 'Acertou!');
        MostrarTextoID('texto__paragrafo', 'Um novo número foi sorteado');
        MostrarTexto('p', `Você acertou em ${tentativas} tentativas!`);
        NumeroSecreto = Sorteio();
        tentativas = 0;
        LimparCampo();
    } else {
        if (chute > NumeroSecreto) {
            MostrarTexto('h1', 'O número é MENOR.');
        } else {
            MostrarTexto('h1', 'O número é MAIOR.');
        }
        tentativas++;
        LimparCampo();
    }
    setTimeout(() => {
        MostrarTextoID('texto__paragrafo', '');
    }, 2000);
}
function MostrarTextoID(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}
function MostrarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

function Sorteio() {
    let NumSorteado = parseInt(Math.random() * LimiteElemt + 1);
    let QntElemtLista = ListaDeNumeros.length;
    if(QntElemtLista == LimiteElemt){
        ListaDeNumeros = [];
    }
    if (ListaDeNumeros.includes(NumSorteado)) {
        return Sorteio();
    } else {
        ListaDeNumeros.push(NumSorteado);
        console.log(NumSorteado);
        console.log(ListaDeNumeros);
        return NumSorteado;
    }
}
function TextosIniciais() {
    MostrarTexto('h1', 'Jogo do número secreto');
    MostrarTexto('p', 'Escolha um número entre 1 e 10');

}
function LimparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    TextosIniciais();
    NumeroSecreto = Sorteio();
    tentativas = 0;
    LimparCampo();
    ListaDeNumeros = [];
}