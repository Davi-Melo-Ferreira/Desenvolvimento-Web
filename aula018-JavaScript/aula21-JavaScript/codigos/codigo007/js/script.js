function carregarDados(callback){
    console.log("...Carregando dados...");

    setTimeout(() => {
        const dados = ["Agata", "Coly", "Isis"];
        console.log("Dados carregados.");
        callback(dados);
    }, 3000);
}

function exibirDados(lista) {
    console.log("Lista de nomes:");
    lista.forEach((nome, indice) => {
        console.log(`${indice + 1}. ${nome}`);
    });
}

carregarDados(exibirDados);