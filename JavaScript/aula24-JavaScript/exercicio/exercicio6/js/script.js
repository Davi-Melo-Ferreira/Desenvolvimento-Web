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
        let entrada = entradaInput.value.trim().toLowerCase().replace(/\s+/g, '');
        let invertida = entrada.split('').reverse().join('');

        if (entrada === invertida){
            add(`A palavra ${entrada} é um Palíndromo!`);
        } else {
            add(`A palavra ${entrada} NÃO é um Palíndromo!`);
        }
    });
})