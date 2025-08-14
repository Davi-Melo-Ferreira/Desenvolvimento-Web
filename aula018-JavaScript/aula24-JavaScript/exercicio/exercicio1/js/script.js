document.addEventListener('DOMContentLoaded', function(){

    let x = document.getElementById('x');

    let y = document.getElementById('y');

    const ul = document.getElementById('resultado');

    const limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');

        li.textContent = texto;

        ul.appendChild(li);
    };

    // função somar
    document.getElementById('btnSoma').addEventListener('click', function(){
        limpar();
        x = parseFloat(x.value);
        y = parseFloat(y.value);
        const soma = x + y;
        add(soma);

    });

    // subtrair
    document.getElementById('btnSubtracao').addEventListener('click', function(){
        limpar();
        const subtracao = x - y;
        add(subtracao);

    });

    // multiplicar
    document.getElementById('btnMultiplicacao').addEventListener('click', function(){
        limpar();
        const multiplicacao = x * y;
        add(multiplicacao);

    });

    // dividir
    document.getElementById('btnDivisao').addEventListener('click', function(){
        limpar();
        const divisao = x / y;
        add(divisao);

    });
})