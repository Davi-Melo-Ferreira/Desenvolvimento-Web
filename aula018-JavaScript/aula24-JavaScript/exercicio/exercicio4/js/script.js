document.addEventListener('DOMContentLoaded', function(){

    const caixa = document.getElementById('caixa');

    // const add = cor => {
    //     caixa.textContent = cor;
    //     caixa.appendChild(cor);
    // };

    document.getElementById('btnVermelho').addEventListener('click', function(){
        caixa.style.backgroundColor = "red";
        
        // caixa.style.backgroundColor = "#e74c3c";
    });

    document.getElementById('btnVerde').addEventListener('click', function(){
        caixa.style.backgroundColor = "green";
        add('#2ecc71');
    });

    document.getElementById('btnAzul').addEventListener('click', function(){
        caixa.style.backgroundColor = "blue";
        add('#3498db');
    });
})