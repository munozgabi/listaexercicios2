/**39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

function compactarVetor(){
    let vetorA = [];
    for(let i = 0; i < 100; i++){
        vetorA[i] = Math.floor(Math.random() * 201) - 100;
    }
    let vetorB = [];
    for(let i = 0; i < vetorA.length; i++){
        if(vetorA[i] > 0){
            vetorB.push(vetorA[i]);
        }
    }
    console.log("Vetor: " + vetorA);
    console.log("Vetor compactado: " + vetorB);
}

compactarVetor();