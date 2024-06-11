/**23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */

function fazerMatrizIdentidade(tamanhoMatriz) {
 
    let matrizIdentidade = [];
    for(let i = 0; i < tamanhoMatriz; i++) {
        matrizIdentidade[i] = [];
        for (let j = 0; j < tamanhoMatriz; j++) {
            matrizIdentidade[i][j] = 0;
        }
    }

    for(let i = 0; i < tamanhoMatriz; i++) {
        matrizIdentidade[i][i] = 1;
    }

    for(let i = 0; i < matrizIdentidade.length; i++) {
        console.log(matrizIdentidade[i].join(' '));
    }

}

const prompt = require('prompt-sync')();
let tamanho = parseInt(prompt("Digite o tamanho da matriz: "));
fazerMatrizIdentidade(tamanho);