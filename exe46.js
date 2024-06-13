/**46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */

function totalDeVendasPorVendedor(){
    let array = [
        {
            vendedor: "Gabi",
            valor: 100
        },
        {
            vendedor: "Gabi",
            valor: 200
        },
        {
            vendedor: "Ana",
            valor: 400
        },
        {
            vendedor: "João",
            valor: 200
        }
    ];
    let totalDeVendas = {};
    for(let venda of array){
        let {vendedor, valor} = venda;
        if(totalDeVendas[vendedor]){
            totalDeVendas[vendedor] += valor;
        }
        else{
            totalDeVendas[vendedor] = valor;
        }
    }
    console.log(totalDeVendas);
}
totalDeVendasPorVendedor();