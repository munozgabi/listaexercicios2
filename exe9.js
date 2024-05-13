/**Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require('prompt-sync')();
let salario = 0, escolha = 0, salarioMulheres = 0, salarioHomens = 0;
let sexo, sexoFormatado;

do{
    salario = parseFloat(prompt("Digite o salário: "));
    sexo = prompt("Digite o sexo: ");
    sexoFormatado = sexo.toUpperCase();
    if(sexoFormatado === "FEMININO"){
        salarioMulheres += salario;
    }
    else if(sexoFormatado === "MASCULINO"){
        salarioHomens += salario;
    }
    else{
        console.log("Sexo inválido, tente novamente");
    }
    escolha = prompt("Se deseja continuar adicionando digite 1, caso contrário digite 0: ");
}while(escolha == 1);

console.log("Salário total das mulheres: R$ " + salarioMulheres);
console.log("Salário total dos homens: R$ " + salarioHomens);


