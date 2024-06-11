/**24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */


function numerosNegativosMatriz(linhas, colunas) {
    let matrizM = [];
    for(let i = 0; i < linhas; i++) {
        matrizM[i] = [];
        for(let j = 0; j < colunas; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 21) - 10;
        }
    }
    
    let vetorC = [];
    for(let i = 0; i < matrizM.length; i++) {
        let negativos = 0;
        for(let j = 0; j < matrizM[i].length; j++) {
            if (matrizM[i][j] < 0) {
                negativos++;
            }
        }

        vetorC[i] = negativos;
    }
    
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }
    
    console.log("Número de elementos negativos por linha: " + vetorC);
}

const prompt = require('prompt-sync')();
let linhas = parseInt(prompt("Digite o número de linhas da matriz: "));
let colunas = parseInt(prompt("Digite o número de colunas da matriz: "));
numerosNegativosMatriz(linhas, colunas);

