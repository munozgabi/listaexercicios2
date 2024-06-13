/**48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

function qtdDeItens(){
    let inventarioLojaA = {
        caneta: 10,
        lapis: 20,
        borracha: 5,
        lapiseira: 15
    };
    let inventarioLojaB = {
        caneta: 5,
        lapis: 10,
        borracha: 7,
        apontador: 5
    };

    let inventariosAB = {}
    for(let item in inventarioLojaA){
        inventariosAB[item] = inventarioLojaA[item];
    }

    for(let item in inventarioLojaB){
        if(item in inventariosAB){
            inventariosAB[item] += inventarioLojaB[item];
        }
        else{
            inventariosAB[item] = inventarioLojaB[item];
        }
    }

    console.log(inventariosAB);
}

qtdDeItens();