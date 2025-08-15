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
        let entrada = entradaInput.value.trim();

        //converte para número
        if (!isNaN(entrada) && entrada !== '') {
            entrada = Number(entrada);
        }
        //converte para boolean
        else if (entrada.toLowerCase() === 'true' || entrada.toLowerCase() === 'false') {
            entrada = (entrada.toLowerCase() === 'true');
        }

        add(typeof entrada);
    });
})