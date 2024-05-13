/**3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

function calculaPrecoPassagem(distancia){
    if(distancia <= 200){
        let calculaPreco = 0.50*distancia;
        return "O preço da passagem é de: R$",calculaPreco;
    }else{
        let calculaPreco = 0.45*distancia;
        return "O preço da passagem é de: R$",calculaPreco;
    }
}

const prompt = require('prompt-sync')();
let distancia = prompt("Digite a distância desejada: ");
console.log(calculaPrecoPassagem(distancia));