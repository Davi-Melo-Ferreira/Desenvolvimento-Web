document.addEventListener('DOMContentLoaded', function(){
    let entradaInput = document.getElementById('entradaInput');
    const ul = document.getElementById('saida');

    limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');
        li.textContent = texto;

        ul.appendChild(li);
    };

    document.getElementById('entradaInput').addEventListener('input', function(){
        limpar();
        const entrada = entradaInput.value;
        let qntd = entrada.length;
        add(`A quantidade de caracteres é ${qntd}`);
    });
})