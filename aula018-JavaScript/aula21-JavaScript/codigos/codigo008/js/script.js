async function obterCotacaoDolar() {
    try{
        const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
        if (!resposta.ok) {
            throw new Error("Erro ao buscar a cotação");
        }
        const dados = await resposta.json();
        const cotacao = dados.USDBRL;

        console.log("$ Coação do Dólar (USD + BRL):");
        console.log("Alta:", cotacao.high);
        console.log("Baixa:", cotacao.low);
        console.log("Valor atual:", cotacao.bid);
        console.log("Data/Hora:", cotacao.create_date);
    } catch (erro) {
        console.error("Erro ao obter a cotação:", erro.message);
    }
}

obterCotacaoDolar();