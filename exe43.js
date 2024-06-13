/**43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

function combinaPropriedades(){
    let obj1 = {
        nome: "Gabi",
        idade: 18,
        curso: "Administração"
    };

    let obj2 = {
        idade: 20,
        curso: "Analise e desenvolvimento de sistemas"
    };

    let obj3 = Object.assign({}, obj1, obj2);
    console.log(obj3);

}

combinaPropriedades();