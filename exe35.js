/**35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

function vetoresParesEImpares(){
    const prompt = require('prompt-sync')();
    let vetorPares = [];
    let vetorImpares = [];
    for(let i = 1; i <= 30; i++){
        let numero = parseInt(prompt("Digite o " + i + "° valor: "));
        if(numero%2 === 0){
            if(vetorPares.length === 5){
                console.log("Vetor de Pares: " + vetorPares);
                vetorPares = [];
            }
            else{
                vetorPares.push(numero);
            }
        }
        else{
            if(vetorImpares.length === 5){
                console.log("Vetor de Impares: " + vetorImpares);
                vetorImpares = []
            }
            else{
                vetorImpares.push(numero);
            }
        }
    }
    console.log("Vetor de Pares: " + vetorPares);
    console.log("Vetor de Impares: " + vetorImpares);

}

vetoresParesEImpares();