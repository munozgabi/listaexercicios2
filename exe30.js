/**30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */

function somaLinhasEColunas(){

    //Matriz M
    let matrizM = [];
    for(let i = 0; i < 5; i++) {
        matrizM[i] = [];
        for (let j = 0; j < 5; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    console.log("\nMatriz M:")
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }

    let SL = [];
    for(let i = 0; i < 5; i++) {
        let somaLinhas = 0;
        for (let j = 0; j < 5; j++) {
            SL.push(somaLinhas += matrizM[i][j]);
        }
    }

    console.log("A soma das linhas: " + SL);
    
    let SC = [];
    for(let j = 0; j < 5; j++) {
        let somaColunas = 0;
        for (let i = 0; i < 5; i++) {
            SC.push(somaColunas += matrizM[i][j]);
        }
    }

    console.log("A soma das colunas: " + SC);

}

somaLinhasEColunas();