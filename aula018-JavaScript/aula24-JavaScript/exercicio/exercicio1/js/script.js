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
        const x1 = Number(x.value);
        const y1 = Number(y.value);
        const soma = x1 + y1;
        add(soma);

    });

    // subtrair
    document.getElementById('btnSubtracao').addEventListener('click', function(){
        limpar();
        const x1 = Number(x.value);
        const y1 = Number(y.value);
        const subtracao = x1 - y1;
        add(subtracao);

    });

    // multiplicar
    document.getElementById('btnMultiplicacao').addEventListener('click', function(){
        limpar();
        const x1 = Number(x.value);
        const y1 = Number(y.value);
        const multiplicacao = x1 * y1;
        add(multiplicacao);

    });

    // dividir
    document.getElementById('btnDivisao').addEventListener('click', function(){
        limpar();
        const x1 = Number(x.value);
        const y1 = Number(y.value);
        const divisao = x1 / y1;
        add(divisao);

    });
})