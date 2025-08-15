document.addEventListener('DOMContentLoaded', function(){
    let entradaInput = document.getElementById('entradaInput');
    const ul = document.getElementById('saida');

    limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');
        li.textContent = texto;
        ul.appendChild(li);
    };

    document.getElementById('btnAdicionar').addEventListener('click', function(){
        entrada = entradaInput.value;
        add(entrada);
    });
})