/**15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

function numerosParesEPosicoes(){
    const prompt = require('prompt-sync')();
    let listaNumeros = [];
    for(let i = 1; i <= 10; i++){
        let num = parseInt(prompt("Digite o " + i + "° número: "));
        listaNumeros.push(num);
    }
    for(let i = 1; i < listaNumeros.length; i++){
        let calculo = 0;
        calculo = listaNumeros[i]%2;
        if(calculo === 0){
            console.log("Número: " + listaNumeros[i] + " | Posição: " + listaNumeros.indexOf(listaNumeros[i])) ;
        }
    }
}

numerosParesEPosicoes();