//Simula a coleta de dados e chama a próxima função
function coletarDados(callback) {
  console.log("Coletando dados...");
  setTimeout(() => {
    const dadosBrutos = "nome:Pedro,idade:30";
    console.log("Dados coletados.");
    callback(dadosBrutos);
  }, 1500); // 1,5 seg.
};

//Processa os dados e chama a próxima função
function processarDados(dados, callback) {
  console.log("Processando dados...");
  const [nome, idade] = dados.split(",");
  const dadosProcessados = {
    nome: nome.split(":")[1],
    idade: parseInt(idade.split(":")[1]),
  };
  callback(dadosProcessados);
};

//Exibe os dados
function exibirDados(resultado) {
  console.log("Dados finais:", resultado);
};

coletarDados((dadosBrutos) => { // dados brutos = {}
  processarDados(dadosBrutos, (dadosProcessados) => {
    exibirDados(dadosProcessados);
  });
});
