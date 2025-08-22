function atenderCliente(cliente) {
  console.log("Atendendo o próximo cliente...");
  cliente(); // Executa a função do cliente (o callback)
}

function cliente1() {
  console.log("Cliente 1: Preciso de suporte técnico.");
}

function cliente2() {
  console.log("Cliente 2: Preciso atualizar meus dados.");
}

function cliente3() {
  console.log("Cliente 3: Preciso fazer um agendamento.");
}

atenderCliente(cliente1);
atenderCliente(cliente2);
atenderCliente(cliente3);