/**44. Escreva uma função que conte quantas
 *  propriedades do tipo string existem em um
objeto e retorne esse número. */

function qtdDeStrings(){
    const objeto = {
        nome: "Gabi",
        idade: 20,
        curso: "Analise e desenvolvimento de sistemas"
    };

    let contador = 0;
    for(let chave in objeto){
        if(typeof objeto[chave] === "string"){
            contador++;
        }
    }

    console.log("Quantidade de strings: " + contador);

}

qtdDeStrings();

