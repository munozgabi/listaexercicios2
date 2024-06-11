/**22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, 
a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */

function pesquisaHabitantes(){
    let escolha = 1, mediaSalario = 0, salarioTotal = 0, cont = 0, mediaFilhos = 0, filhosTotal = 0, pessoasSalarioBaixo = 0, percentual = 0, maiorSalario = 0;
    while(escolha===1){
        const prompt = require('prompt-sync')();
        let salario = parseFloat(prompt("Digite o salário: "));
        let filhos = parseInt(prompt("Digite o número de filhos: "));
        if(maiorSalario === 0){
            maiorSalario = salario;
        }
        else if(maiorSalario < salario){
            maiorSalario = salario;
        }

        salarioTotal += salario;
        filhosTotal += filhos;
        

        if(salario <= 350){
            pessoasSalarioBaixo++;
        }

        cont++
        
        escolha = parseInt(prompt("Digite 1 para continuar ou 0 para parar: "));
    }

    mediaSalario = salarioTotal/cont;
    mediaFilhos = filhosTotal/cont;
    percentual = (pessoasSalarioBaixo/cont)*100;

    console.log("\nMédia de salários: R$" + mediaSalario.toFixed(2));
    console.log("Média de filhos: " + mediaFilhos);
    console.log("Maior salário: R$" + maiorSalario);
    console.log("Percentual de pessoas com salário até R$350: " + percentual.toFixed(2) + "%");
}

pesquisaHabitantes();