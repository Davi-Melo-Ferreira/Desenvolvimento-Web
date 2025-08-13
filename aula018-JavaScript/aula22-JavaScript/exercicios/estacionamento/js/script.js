const vagas = [
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga 1
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga 2
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga 3
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga 4
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga 5
]

// Menu simples
while (true) {
    const opcao = prompt(
        "--- Sistema de Estacionamento ---\n" +
        "1. Ocupar uma vaga\n" +
        "2. Adicionar horário de saída (liberar vaga)\n" +
        "3. Visualizar todas as vagas\n" +
        "4. Sair\n" +
        "Escolha uma opção:"
    );

    if (opcao === '1') {
        ocuparVaga();
    } else if (opcao === '2') {
        liberarVaga(exibirVagas());
    } else if (opcao === '3') {
        exibirVagas();
    } else if (opcao === '4') {
        alert("Encerrando o programa...");
        break;
    } else {
        alert("Opção inválida. Tente novamente.");
    }
}

function ocuparVaga() {  
    for (let i = 0; i < vagas.length; i++) {
        if (vagas[i].disponivel === true) {
            vagas[i].disponivel = false; //Ocupa a vaga
            let horaAtual = new Date();
            vagas[i].entrada = horaAtual.toLocaleTimeString(); //Pega o horário atual
            alert(`Vaga ${i + 1} ocupada com sucesso!\nHorário de entrada: ${vagas[i].entrada}`);
            break;
        }
    }
}


function liberarVaga(callback) {
  // Encontra a primeira vaga ocupada para verificar se há alguma disponível para liberar
  for (let i = 0; i < vagas.length; i++) {
    if (vagas[i].disponivel === false) {
      break;
    } else{
        alert("Nenhuma vaga ocupada no momento. Nenhuma vaga para ser liberada.");
        return;
    }
  }

  callback; // mostras as vagas
  // Se houver vagas ocupadas, pede o número da vaga ao usuário
  let numeroVaga = prompt("Digite o número da vaga que deseja liberar:");

  // Validação: verifica se a entrada é um número válido e se a vaga existe
  numeroVaga = parseInt(numeroVaga);
  if (isNaN(numeroVaga) || numeroVaga < 1 || numeroVaga > vagas.length) {
    alert("Número de vaga inválido. Tente novamente.");
    return;
  }

  const index = numeroVaga - 1; // Ajusta para o índice do array

  // Verifica se a vaga selecionada está realmente ocupada
  if (vagas[index].disponivel) {
    alert(`A Vaga ${numeroVaga} já está disponível. Nenhuma ação necessária.`);
    return;
  }

  // Libera a vaga
  vagas[index].disponivel = true;
  let horaAtual = new Date();
  vagas[index].saida = horaAtual.toLocaleTimeString(); //Pega o horário atual

  alert(`Vaga ${numeroVaga} liberada com sucesso!\nHorário de saída: ${vagas[index].saida}`);
}


function exibirVagas() {
    let mensagem = "--- Status das Vagas ---\n";
    // Iteração dentro de vagas
    vagas.forEach((vaga, index) => {
        mensagem += `\nVaga ${index + 1}:\n`;
        mensagem += `   Status: ${vaga.disponivel ? "Disponível" : "Ocupada"}\n`;
        mensagem += `   Entrada: ${vaga.entrada ? vaga.entrada : "N/A"}\n`;
        mensagem += `   Saída: ${vaga.saida ? vaga.saida : "N/A"}\n`;
        mensagem += "--------------------------";
    });
    alert(mensagem);
}