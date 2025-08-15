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
        entrada = entradaInput.value;
        for (let i = 1; i < 11; i++){
            let tabuada = entrada * i;
            add(`${entrada} * ${i} = ${tabuada}`);
        }
    });
})