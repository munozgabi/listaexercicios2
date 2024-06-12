/**40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

function resultadoLoto(){
    let gabarito = [];
    for(let i = 0; i < 5; i++){
        gabarito[i] = Math.floor(Math.random() * 5) + 1;
    }
    let apostadores = [];
    for(let i = 0; i < 50; i++) {
        apostadores[i] = [];
        for (let j = 0; j < 5; j++) {
            apostadores[i][j] = Math.floor(Math.random() * 5) + 1; 
        }
    }
    
    let ganhador = false;
    for (let i = 0; i < apostadores.length; i++) {
        let acertos = 0;
        for(let j = 0; j < 5; j++) {
            if (gabarito[j] === apostadores[i][j]) {
                acertos++;
            }
        }
        if (acertos === 5) {
            console.log("Parabéns, tu foi o GANHADOR!");
            console.log("Gabarito:", gabarito);
            console.log("Aposta:", apostadores[i]);
            ganhador = true;
            break; 
        }
    }

    if (!ganhador) {
        console.log("Não houveram ganhadores!");
    }
}


resultadoLoto();