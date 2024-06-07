/**12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

function SequenciaFibonacci(){
    let listaElementos = [0,1];
    let elemento;
    for(i = 2; i < 10; i++){
        elemento = listaElementos[i - 1] + listaElementos[i - 2];
        listaElementos.push(elemento)
    }

    return console.log(listaElementos);
}

SequenciaFibonacci();

