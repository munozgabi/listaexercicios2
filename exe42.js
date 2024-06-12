/**42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */

function arraysObjeto(){
    let dados = {
        nome: "Gabi",
        idade: 20,
        linguagens: ["javascript", "php", "java"],
        comidasFavoritas: ["bolo de chocolate", "pizza"],
        curso: "Análise e desenvolvimento de sistemas",
        semestre: 2
    };
    let arrays = {};
    for(let chave in dados){
        if(Array.isArray(dados[chave])){
            arrays[chave] = dados[chave];
        }
    }

    console.log(arrays);
}

arraysObjeto();