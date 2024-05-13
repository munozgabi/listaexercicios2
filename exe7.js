/**7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

function calculaPrecoAluguelCarro(tipoCarro, qtdDias, distanciaPercorrida){
    if(tipoCarro == 1){
        if(distanciaPercorrida <= 100){
            let resultado = (90 * qtdDias) + (0.20*distanciaPercorrida);
            return `Preço final: R$${resultado}`;
        }else if(distanciaPercorrida > 100){
            let resultado = (90 * qtdDias) + (0.10*distanciaPercorrida);
            return `Preço final: R$${resultado}`;
        }
        else{
            return "Valor inválido!";
        }
    }
    else if(tipoCarro == 2){
        if(distanciaPercorrida <= 200){
            let resultado = (150 * qtdDias) + (0.30*distanciaPercorrida);
            return `Preço final: R$${resultado}`;
        }else if(distanciaPercorrida > 200){
            let resultado = (150 * qtdDias) + (0.25*distanciaPercorrida);
            return `Preço final: R$${resultado}`;
        }
        else{
            return "Valor inválido!";
        }
    }
    else{
        return "Valor inválido!";
    }
    
}

const prompt = require('prompt-sync')();
let tipoCarro = prompt("Digite 1 para carro popular ou 2 para carro de luxo: ");
let qtdDias = prompt("Digite a quantidade de dias do aluguel: ");
let distanciaPercorrida = prompt("Digite a distância percorrida: ");
console.log(calculaPrecoAluguelCarro(tipoCarro, qtdDias, distanciaPercorrida));