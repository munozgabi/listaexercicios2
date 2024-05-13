/**6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

function jogoAdivinha(jogadaUsuario){
    let jogadaComputador = Math.floor(Math.random() * 4) + 1;
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