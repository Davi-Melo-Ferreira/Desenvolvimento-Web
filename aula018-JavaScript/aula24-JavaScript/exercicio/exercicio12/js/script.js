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
        for (let i = entrada; i > 0; i--) {
        setTimeout(() => {
            limpar();
            add(i);
            if (i === 0) {
                add('Tempo esgotado!');
            }
        }, (entrada - i) * 1000);
    }
    });
})