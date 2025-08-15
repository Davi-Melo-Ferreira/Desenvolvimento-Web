document.addEventListener('DOMContentLoaded', function(){
    const ul = document.getElementById('saida');
    const inputInicial = document.getElementById('inputInicial');

    const limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');
        li.textContent = texto;
        ul.appendChild(li);
    };

    document.getElementById('btnStart').addEventListener('click', function(){
        limpar();
        let entrada = parseInt(inputInicial.value);
        if (isNaN(entrada) || entrada < 0) {
            add('Digite um número válido.');
            return;
        }
        for (let i = entrada + 1; i > 0; i--) {
        setTimeout(() => {
            limpar();
            add(i - 1);
            if (i - 1 === 0) {
                add('Tempo esgotado!');
            }
        }, (entrada - i + 1) * 1000);
    }
    });
})