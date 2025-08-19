const saudacao = function (nome){
    return `Olá, ${nome}! Seja bem vindo(a).`;
};

const mostrarResultado = (mensagem) =>{
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

document.addEventListener("DOMContentLoaded", () => {
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');
    const entradaInput = document.getElementById('entradaInput');

    saudarBtn.addEventListener('click', function(){
        const entrada = entradaInput.value;
        const mensagem = saudacao(entrada);

        mostrarResultado(mensagem);
    });

    limparBtn.addEventListener('click', function(){
        document.getElementById('resultado').innerHTML = '';
    });
});