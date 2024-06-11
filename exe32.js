/**32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

function matrizModificada(){
    //Matriz M
    let matrizM = [];
    for(let i = 0; i < 12; i++) {
        matrizM[i] = [];
        for (let j = 0; j < 13; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz M:")
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }

    let maiorElemento = Math.abs(matrizM[5][0]);
    for (let j = 1; j < 13; j++) {
        let valorModulo = Math.abs(matrizM[5][j]);
        if (valorModulo > maiorElemento) {
            maiorElemento = valorModulo;
        }
    }
    
    let matrizModificada = [];
    for (let i = 0; i < 12; i++) {
        matrizModificada[i] = [];
        for (let j = 0; j < 13; j++) {
            matrizModificada[i][j] = matrizM[i][j] / maiorElemento;
        }
    }

    console.log("\nMatriz Modificada:")
    for(let i = 0; i < matrizModificada.length; i++) {
        console.log(matrizModificada[i].join(' '));
    }


}


matrizModificada();