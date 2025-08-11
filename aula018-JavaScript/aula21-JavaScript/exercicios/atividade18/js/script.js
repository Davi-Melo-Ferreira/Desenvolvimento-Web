function simularRequisicao() {
  return new Promise((resolve, reject) => {
    const sucesso = Math.random() > 0.5; // sucesso se random for maior que 0.5
    setTimeout(() => {
      if (sucesso) {
        resolve("Dados da API recebidos com sucesso!");
      } else {
        reject("Erro: falha na conexão com a API.");
      }
    }, 1500);
  });
}

async function buscarDadosDeAPI() {
  try {
    console.log("Tentando buscar dados...");
    // A execução é pausada aqui. Se a promise for rejeitada, o 'catch' será ativado.
    const resposta = await simularRequisicao();
    console.log("Sucesso:", resposta);
  } catch (erro) {
    // Captura o erro da promise e o trata
    console.log("Erro:", erro);
  }
}

buscarDadosDeAPI();