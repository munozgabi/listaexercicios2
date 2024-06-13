/**47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */

function transformaObjeto(){
    const objeto = {
        num1: 1,
        num2: 2,
        num3: 3,
        num4: 4,
        num5: 5
    };

    function multiplicaPorCinco(objeto, chave){
        return objeto[chave] * 5;
    }

    let objetoNovo = {}
    for(let chave in objeto){
        objetoNovo[chave] = multiplicaPorCinco(objeto, chave);
    }

    console.log(objetoNovo);
}
transformaObjeto();