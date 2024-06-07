/**17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

function menoresDeIdade(){
    const prompt = require('prompt-sync')();
    let listaNomes = [];
    let listaIdades = [];
    for(let i = 1; i <= 9; i++){
        let nome = prompt("Digite o " + i + "° nome: ");
        listaNomes.push(nome);
        let idade = parseInt(prompt("Digite a " + i + "° idade: "));
        listaIdades.push(idade);
    }
    console.log("Menores de idade: ");
    for(let i = 0; i < listaIdades.length; i++){
        if(listaIdades[i] < 18){
            console.log("Nome: " + listaNomes[i] + " | Idade: " + listaIdades[i]);
        }
    }

}

menoresDeIdade();