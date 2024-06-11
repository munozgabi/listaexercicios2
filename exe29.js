/**29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

function calculosMatriz(){

    //Matriz M
    let matrizM = [];
    for(let i = 0; i < 5; i++) {
        matrizM[i] = [];
        for(let j = 0; j < 5; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz M:")
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }

    let somaLinha4 = 0;
    for(let j = 0; j < matrizM[3].length; j++) {
        somaLinha4 += matrizM[3][j];
    }

    console.log("A soma da linha 4 é: " + somaLinha4);

    let somaColuna2 = 0;
    for(let i = 0; i < matrizM.length; i++) {
        somaColuna2 += matrizM[i][1];
    }

    console.log("A soma da coluna 2 é: " + somaColuna2);

    let somaDiagonalPrincipal = 0;
    for(let i = 0; i < matrizM.length; i++) {
        somaDiagonalPrincipal += matrizM[i][i];
    }

    console.log("A soma da diagonal principal é: " + somaDiagonalPrincipal);

    let somaTotal = 0;
    for(let i = 0; i < matrizM.length; i++) {
        for(let j = 0; j < matrizM[i].length; j++) {
            somaTotal += matrizM[i][j];
        }
    }

    console.log("A soma total dos elementos é: " + somaTotal);

}

calculosMatriz();