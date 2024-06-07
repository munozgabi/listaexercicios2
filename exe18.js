/**18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

function registroFuncionario(nome, cargo, salario){
    return console.log("Registro do Funcionário: \n" + "Nome: " + nome + 
        "\nCargo: " + cargo + "\nSalário: R$" + salario);
}

const prompt = require('prompt-sync')();
let nome = prompt("Digite o nome: ");
let cargo = prompt("Digite o cargo: ");
let salario = parseFloat(prompt("Digite o salário: "));
registroFuncionario(nome, cargo, salario);

