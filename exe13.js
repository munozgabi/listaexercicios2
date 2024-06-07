/**13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */

function SequenciaFibonacci(){
    let listaElementos = [0,1];
    let elemento;
    for(i = 2; i < 15; i++){
        elemento = listaElementos[i - 1] + listaElementos[i - 2];
        listaElementos[i] = elemento; 
    }

    return console.log(listaElementos);
}

SequenciaFibonacci();