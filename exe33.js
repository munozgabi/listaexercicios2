/**33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */

function multiplicaDiagonais(){
    //Matriz M
    let matrizM = [];
    for(let i = 0; i < 3; i++) {
        matrizM[i] = [];
        for (let j = 0; j < 3; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz M:")
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }

    let soma = 0;
    for(let i = 0; i < 3; i++) {
        soma += matrizM[i][2 - i]; 
    }
    let media = soma / 3;
   

    for(let i = 0; i < 3; i++) {
        matrizM[i][i] *= media; 
    }

    
    console.log("\nMatriz Modificada:")
    for (let i = 0; i < 3; i++) {
        console.log(matrizM[i].join(' '));
    }
}

multiplicaDiagonais();