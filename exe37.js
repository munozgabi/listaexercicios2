/**37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

function acertosProva(){
    const gabarito = ['A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E','A', 'B', 'C', 'D', 'E'];
    const prompt = require('prompt-sync')();

    for(let i = 0; i < 50; i++){
        let aluno = prompt("Digite o gabarito do aluno: ");
        let alunoAjustado = aluno.toUpperCase();
        let alunoGabarito = alunoAjustado.split(',');
        let acertos = 0;
        for (let i = 0; i < alunoGabarito.length; i++) {
            if (gabarito[i] === alunoGabarito[i]) {
                acertos++;
            }
        }
        if(acertos >= 12){
            console.log("Aluno APROVADO!");
        }
        else{
            console.log("Aluno REPROVADO!");
        }
    }
}


acertosProva();