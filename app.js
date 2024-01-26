let listaDeNumerosSorteados = [];
let numLim = 10;
exibirMensInicial();
let numero = numeroAleatorio();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numero) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palTent = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensTent = `Parabéns, você descobriu o número secreto com ${tentativas} ${palTent}`;
        exibirTextoNaTela('p', mensTent);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numero) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numLim + 1);
    let tamLista = listaDeNumerosSorteados.length;
    if (tamLista == numLim) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    tentativas = 1;
    numero = numeroAleatorio();
    exibirMensInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}