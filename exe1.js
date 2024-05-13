/**1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

function calcularTempoDeVida(qtdCigarros, qtdAnos){

    let totalCigarros = 365 * qtdAnos * qtdCigarros;
    let tempoMinutos = totalCigarros * 10;
    let tempoDias = Math.round(tempoMinutos/1440);

    return tempoDias;

}

const prompt = require('prompt-sync')();
let qtdCigarros = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "));
let qtdAnos = parseInt(prompt("Digite a quantidade de anos que fuma: "));
let tempoReduzido = calcularTempoDeVida(qtdCigarros, qtdAnos);
console.log("A redução da sua vida será de " + tempoReduzido + " dias");


