/**14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */

function listaDeNomes(){
    const prompt = require('prompt-sync')();
    let listaNomes = [];
    let listaNomesInversa = [];
    for(let i = 1; i <= 7; i++){
        let nome = prompt("Digite o " + i + "° nome: ");
        listaNomes.push(nome);
    }
    for(let i = listaNomes.length - 1; i >=0; i--){
        listaNomesInversa.push(listaNomes[i]);
    }
    return console.log(listaNomesInversa);
}

listaDeNomes();
