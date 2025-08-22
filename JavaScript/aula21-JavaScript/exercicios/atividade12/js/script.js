function executarTarefas (hora, data) {
    hora();
    data();
};

function mostrarHora(){
    const hora = new Date();
    console.log(`Horas: ${hora.toLocaleTimeString()}`);
};

function mostrarData(){
    const data = new Date();
    console.log(`Data: ${data.toLocaleDateString()}`);
};

tarefas = executarTarefas(mostrarHora, mostrarData);