/**20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */

function contraChequeFuncionario(matricula, nome, salarioBruto){
    let deducao = 0, salarioLiquido = 0;
    deducao = salarioBruto*(12/100);
    salarioLiquido = salarioBruto - deducao;
    return console.log("Contracheque do Funcionário: \n" + "Matrícula: " + matricula +
        "\nNome: " + nome + 
        "\nSalário Bruto: R$" + salarioBruto + 
        "\nDedução INSS: R$" + deducao + 
        "\nSalário Líquido: R$" + salarioLiquido);
}

const prompt = require('prompt-sync')();
let matricula = prompt("Digite a matrícula: ");
let nome = prompt("Digite o nome: ");
let salarioBruto = parseFloat(prompt("Digite o salário bruto: "));
contraChequeFuncionario(matricula, nome, salarioBruto);