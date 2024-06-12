/**38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

function calculos(numero){
    let vetor = [];
    for(let i = 0; i < 6; i++){
        vetor[i] = Math.floor(Math.random() * 9) + 1;
    }

    switch(numero){
        case 1:
            let soma = 0;
            for(let i = 0; i < vetor.length; i++){
                soma += vetor[i];
            }
            console.log("A soma dos elementos é: " + soma);
            break;
        case 2:
            let produto = 1;
            for(let i = 0; i < vetor.length; i++){
                produto *= vetor[i];
            }
            console.log("O produto dos elementos é: " + produto);
            break;
        case 3:
            let somaMedia = 0;
            for(let i = 0; i < vetor.length; i++){
                somaMedia += vetor[i];
            }
            let media = somaMedia/vetor.length;
            console.log("A média dos elementos é: " + media.toFixed(2));
            break;
        case 4:
            console.log("O vetor em ordem crescente: " + vetor.sort((a, b) => a - b));
            break;
        case 5:
            console.log("O vetor é: " + vetor);
            break;
        default:
            console.log("Opção inválida!");
    }

}

const prompt = require('prompt-sync')();
console.log("1- soma dos elementos \n2- produto dos elementos \n3- média dos elementos \n4- ordene os elementos em ordem crescente \n5- mostre o vetor.");
let numero = parseInt(prompt("Digite o número que deseja: "));
calculos(numero);