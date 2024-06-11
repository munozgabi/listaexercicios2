/**31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

function valoresIguaisEDiferentes(valorA){
        //Matriz M
        let matrizM = [];
        for(let i = 0; i < 30; i++) {
            matrizM[i] = [];
            for (let j = 0; j < 30; j++) {
                matrizM[i][j] = Math.floor(Math.random() * 10); 
            }
        }
    
        console.log("\nMatriz M:")
        for(let i = 0; i < matrizM.length; i++) {
            console.log(matrizM[i].join(' '));
        }

        let valoresIguais = 0;
        for(let i = 0; i < matrizM.length; i++) {
            for(let j = 0; j < matrizM[i].length; j++) {
                if(matrizM[i][j] === valorA) {
                    valoresIguais++;
                }   
            }
        }

        console.log("\nValores iguais ao valor A: " + valoresIguais);

        let matrizX = [];
        for (let i = 0; i < matrizM.length; i++) {
            matrizX[i] = [];
            for (let j = 0; j < matrizM[i].length; j++) {
                if (matrizM[i][j] !== valorA) {
                    matrizX[i].push(matrizM[i][j]);
                }
            }
        }

        //Matriz X
        console.log("\nMatriz X:")
        for(let i = 0; i < matrizX.length; i++) {
            console.log(matrizX[i].join(' '));
        }
}

const prompt = require('prompt-sync')();
let valorA = parseInt(prompt("Digite um valor para A: "));
valoresIguaisEDiferentes(valorA);