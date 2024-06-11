/**27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

function calculaMultiplicacaoValorA(valorA) {

    //Matriz M
    let matrizM = [];
    for(let i = 0; i < 6; i++) {
        matrizM[i] = [];
        for(let j = 0; j < 6; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz M:")
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }

    //Vetor
    let vetor = [];
    for(let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            vetor.push(matrizM[i][j] * valorA);
        }
    }

    console.log("Vetor: " + vetor);


}

const prompt = require('prompt-sync')();
let valorA = parseInt(prompt("Digite um valor para A: "));
calculaMultiplicacaoValorA(valorA);