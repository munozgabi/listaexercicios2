/**4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

function verificaTriangulo(ladoA, ladoB, ladoC){
    if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
        return "É possível formar um triângulo";
    }else{
        return "Não é possível formar um triângulo";
    }
}

const prompt = require('prompt-sync')();
let ladoA = parseFloat(prompt("Digite o primeiro lado: "));
let ladoB = parseFloat(prompt("Digite o segundo lado: "));
let ladoC = parseFloat(prompt("Digite o terceiro lado: "));
console.log(verificaTriangulo(ladoA, ladoB, ladoC));