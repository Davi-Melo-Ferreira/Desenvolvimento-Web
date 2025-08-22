document.addEventListener('DOMContentLoaded', function (){
    let numeroInput = document.getElementById('numero');
    const ul = document.getElementById('saida');

    limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');
        li.textContent = texto;

        ul.appendChild(li);
    };

    

    document.getElementById('btnVerificar').addEventListener('click', function(){
        limpar();
        
        const numero = parseFloat(numeroInput.value);

        if (numero >= 1){
            add('Número é Positivo');
        } else{
            add('Número é Negativo');
        }
    });
})