/**11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt = require('prompt-sync')();
let termo, soma = 0;
let listaTermos = [];
let primeiroTermo = parseInt(prompt("Digite o primeiro termo: "));
let razao = parseInt(prompt("Digite a razão: "));

for(i = 1; i <= 10; i++){
    termo = primeiroTermo + (i - 1) * razao;
    listaTermos.push(termo);
    soma+=termo;
}

console.log("P.A = " + listaTermos);
console.log("Soma = " + soma);


