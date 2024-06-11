/**34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

function multiplicaMatriz(){
     //Matriz M
     let matrizM = [];
     for(let i = 0; i < 50; i++) {
         matrizM[i] = [];
         for (let j = 0; j < 50; j++) {
             matrizM[i][j] = Math.floor(Math.random() * 10); 
         }
     }
 
     console.log("\nMatriz M:")
     for(let i = 0; i < matrizM.length; i++) {
         console.log(matrizM[i].join(' '));
     }

     for(let i = 0; i < matrizM.length; i++) {
        let principalElemento = matrizM[i][i];
        for(let j = 0; j < matrizM[i].length; j++) {
            matrizM[i][j] *= principalElemento;
        }
    }

    console.log("\nMatriz Modificada:")
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }
}

multiplicaMatriz();

