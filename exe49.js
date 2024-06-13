/**49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

function transacoesECategorias(){
    const transacoes = [
        {
            id: 1,
            valor: 100,
            data: "12/06/2024",
            categoria: "Alimentação"
        },
        {
            id: 2,
            valor: 200,
            data: "11/06/2024",
            categoria: "Alimentação"
        },
        {
            id: 3,
            valor: 300,
            data: "10/06/2024",
            categoria: "Luz"
        },
        {
            id: 4,
            valor: 100,
            data: "10/06/2024",
            categoria: "Água"
        },
        {
            id: 5,
            valor: 300,
            data: "10/06/2024",
            categoria: "Lazer"
        }
    ];
    
    let transacaoPorCategoria = {};
    for (let transacao of transacoes) {
        let { categoria, valor } = transacao;
        
        if (!transacaoPorCategoria[categoria]) {
            transacaoPorCategoria[categoria] = {
                transacoes: [],
                total: 0
            };
        }
        
        transacaoPorCategoria[categoria].transacoes.push(transacao);
        transacaoPorCategoria[categoria].total += valor;
    }
    
    console.log(transacaoPorCategoria);
}

transacoesECategorias();