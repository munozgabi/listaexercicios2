/**19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.*/

const prompt = require('prompt-sync')();
for(let i = 0; i < 5; i++){
    let horario = prompt("Digite um horário (HH.MM.SS): ");
    let divisao = horario.split(':');
    if(divisao.length == 3){
        console.log(horario);
    }
    else if(divisao.length == 2){
        console.log(horario + ":00");
    }
    else if(divisao.length == 1){
        console.log(horario + ":00:00");
    }
    else{
        console.log("Por favor digite um horário válido");
    }
}
