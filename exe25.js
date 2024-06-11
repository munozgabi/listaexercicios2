/**25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

function somarColunas() {
    let matrizM = [];
    for(let i = 0; i < 15; i++) {
        matrizM[i] = [];
        for (let j = 0; j < 20; j++) {
            matrizM[i][j] = Math.floor(Math.random() * 10); 
        }
    }

    let somaColunas = new Array(20).fill(0);
    for(let i = 0; i < matrizM.length; i++) {
        for(let j = 0; j < 20; j++) {
            somaColunas[j] += matrizM[i][j];
        }
    }

    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }
    
    console.log("A soma de cada coluna: " + somaColunas);
}

somarColunas();