document.addEventListener('DOMContentLoaded', function(){
    let entradaInput = document.getElementById('entradaInput');
    const ul = document.getElementById('saida');

    const limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');
        li.textContent = texto;
        ul.appendChild(li);
    };

    document.getElementById('btnVerificar').addEventListener('click', function(){
        limpar();
        const EntradaInput = entradaInput.value;
        const entrada = Number(EntradaInput);
        if (isNaN(entrada)){
            add("Não é um número");
            return;
        }
        let aleatorio = Math.floor(Math.random()*11);
        if (entrada == aleatorio){
            add('Parabéns! Você Acertou.');
        } else{
            add('Você Errou!');
            add(`Número sorteado: ${aleatorio}`);
        }
    });
})