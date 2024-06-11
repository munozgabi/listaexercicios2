/**28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

function somaElementosDiagonal(){

    //Matriz M
    let matrizM = [];
    for(let i = 0; i < 10; i++) {
        matrizM[i] = [];
        for(let j = 0; j < 10; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz M:")
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }

    let somaAcimaDiagonal = 0;
    for(let i = 0; i < matrizM.length; i++) {
        for(let j = i + 1; j < matrizM[i].length; j++) {
            somaAcimaDiagonal += matrizM[i][j];
        }
    }

    console.log("Soma dos elementos acima diagonal: " + somaAcimaDiagonal);

    let somaAbaixoDiagonal = 0;
    for(let i = 0; i < matrizM.length; i++) {
        for(let j = 0; j < i; j++) {
            somaAbaixoDiagonal += matrizM[i][j];
        }
    }

    console.log("Soma dos elementos abaixo diagonal: " + somaAbaixoDiagonal);
}

somaElementosDiagonal();