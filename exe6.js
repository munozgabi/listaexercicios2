/**6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

function jogoAdivinha(jogadaUsuario){
    let jogadaComputador = Math.floor(Math.random() * 4) + 1;

    if(jogadaUsuario != jogadaComputador){
        return `O número sorteado é: ${jogadaComputador}. Errou!`;
    }
    else{
        return `O número sorteado é: ${jogadaComputador}. Acertou!`;
    }

}

const prompt = require('prompt-sync')();
let jogadaUsuario;

jogadaUsuario = prompt("Digite um número entre 1 e 5: ");
console.log(jogoAdivinha(jogadaUsuario));