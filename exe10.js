/**10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require('prompt-sync')();
let somatorio = 0, valor = 0, media = 0, cont = 0, pares = 0, menor;


do{
    valor = parseFloat(prompt("Digite um número: "));
    somatorio += valor;


    if(valor < menor || cont === 0){
        menor = valor;
    }

    if(valor%2 === 0){
        pares++;
    }

    cont ++;

    media = somatorio/cont;

    escolha = parseInt(prompt("Se deseja continuar digite 1, caso contrário digite 0: "));
}while(escolha == 1);

console.log("Somatório: " + somatorio);
console.log("Menor valor digitado: " + menor);
console.log("Média: " + media);
console.log("Quantidade de números pares: " + pares);

