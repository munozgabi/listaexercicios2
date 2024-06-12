/**36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

function loteria(){
    let gabarito = [];
    for(let i = 0; i < 13; i++){
        gabarito[i] = Math.floor(Math.random() * 100) + 1;
    }
    let apostadores = [];
    for(let i = 0; i < 100; i++) {
        apostadores[i] = [];
        for (let j = 0; j < 13; j++) {
            apostadores[i][j] = Math.floor(Math.random() * 100) + 1; 
        }
    }
    
    let ganhador = false;
    for (let i = 0; i < apostadores.length; i++) {
        let acertos = 0;
        for(let j = 0; j < 13; j++) {
            if (gabarito[j] === apostadores[i][j]) {
                acertos++;
            }
        }
        if (acertos === 13) {
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


loteria();