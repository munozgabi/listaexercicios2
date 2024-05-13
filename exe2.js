/**2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h^-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

function calculaMultaVelocidade(velocidade){
    if(velocidade > 80){
        let calcula = (velocidade - 80) * 5;
        console.log("Você foi multado por excesso de velocidade. Valor: R$",calcula);
    }else{
        console.log("Você não foi multado!");
    }
    
}

const prompt = require('prompt-sync')();
let velocidade = prompt("Digite a velocidade: ");
console.log(calculaMultaVelocidade(velocidade));