/**21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

function pesoIdeal(altura, sexo){
    if(sexo === "F"){
        let pesoMulher = 62.1 * altura - 44.7;
        return console.log("O seu peso ideial é de " + pesoMulher.toFixed(2) + "Kg");
    }
    else if(sexo === "M"){
        let pesoHomem = 72.7 * altura - 58;
        return console.log("O seu peso ideial é de " + pesoHomem.toFixed(2) + "Kg");
    }
    else{
        return console.log("Sexo inválido, por favor digite F ou M");
    }
}

const prompt = require('prompt-sync')();
let altura = parseFloat(prompt("Digite a sua altura: "));
let sexo = prompt("Digite F para feminino ou M para masculino: ");
pesoIdeal(altura, sexo);