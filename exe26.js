/**26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */


function calculaProdutoMatriz(linhas, colunas) {

    //Matriz A
    let matrizA = [];
    for(let i = 0; i < linhas; i++) {
        matrizA[i] = [];
        for (let j = 0; j < colunas; j++) {
            matrizA[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz A:")
    for(let i = 0; i < matrizA.length; i++) {
        console.log(matrizA[i].join(' '));
    }

    //Matriz B
    let matrizB = [];
    for(let i = 0; i < linhas; i++) {
        matrizB[i] = [];
        for(let j = 0; j < colunas; j++) {
            matrizB[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz B:")
    for(let i = 0; i < matrizB.length; i++) {
        console.log(matrizB[i].join(' '));
    }


    //Matriz P
    let matrizP = [];
    for(let i = 0; i < linhas; i++) {
        matrizP[i] = [];
        for(let j = 0; j < colunas; j++) {
            matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
        }
    }

    console.log("\nMatriz P:")
    for(let i = 0; i < matrizP.length; i++) {
        console.log(matrizP[i].join(' '));
    }


}

const prompt = require('prompt-sync')();
let linhas = parseInt(prompt("Digite o número de linhas da matriz: "));
let colunas = parseInt(prompt("Digite o número de colunas da matriz: "));
calculaProdutoMatriz(linhas, colunas);

