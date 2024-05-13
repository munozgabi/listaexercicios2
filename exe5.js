/**5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

function joKenPo(jogadaUsuario){
    let jogadaComputador = Math.floor(Math.random() * 3) + 1;
    if(jogadaComputador === 1){
        jogadaComputador = "PEDRA";
    }else if(jogadaComputador === 2){
        jogadaComputador = "PAPEL";
    }else{
        jogadaComputador = "TESOURA";
    }

    if(jogadaUsuario === jogadaComputador){
        return `${jogadaUsuario} x ${jogadaComputador} = EMPATE!`;
    }
    else{
        if(jogadaUsuario === "PEDRA" && jogadaComputador === "TESOURA" || jogadaUsuario === "PAPEL" && jogadaComputador === "PEDRA" || jogadaUsuario === "TESOURA" && jogadaComputador === "PAPEL"){
            return `${jogadaUsuario} x ${jogadaComputador} = VOCÊ GANHOU!`;
        }
        else{
            return `${jogadaUsuario} x ${jogadaComputador} = VOCÊ PERDEU!`;
        }
    }

}

const prompt = require('prompt-sync')();
let jogada, jogadaUsuario;

jogada = prompt("Digite PEDRA, PAPEL ou TESOURA: ");
jogadaUsuario = jogada.toUpperCase();
console.log(joKenPo(jogadaUsuario));