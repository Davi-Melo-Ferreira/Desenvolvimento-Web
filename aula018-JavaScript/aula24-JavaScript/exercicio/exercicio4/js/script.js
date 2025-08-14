document.addEventListener('DOMContentLoaded', function(){

    const caixa = document.getElementById('caixa');

    const add = cor => {
        caixa.textContent = cor;
        caixa.appendChild(cor);
    };

    document.getElementById('btnVermelho').addEventListener('click', function(){
        const vermelho = '#e74c3c';
        add(vermelho)
        
        // caixa.style.backgroundColor = "#e74c3c";
    });

    document.getElementById('btnVerde').addEventListener('click', function(){
        add('#2ecc71');
    });

    document.getElementById('btnAzul').addEventListener('click', function(){
        add('#3498db');
    });
})