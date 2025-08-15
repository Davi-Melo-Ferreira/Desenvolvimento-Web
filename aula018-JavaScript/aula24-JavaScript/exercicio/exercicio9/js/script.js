document.addEventListener('DOMContentLoaded', function(){
    const paragrafo = document.getElementById('paragrafo');

    document.getElementById('btnClaro').addEventListener('click', function(){
        paragrafo.style.color = "black";
        document.body.style.backgroundColor = 'white';
    });

    document.getElementById('btnEscuro').addEventListener('click', function(){
        paragrafo.style.color = "white";
        document.body.style.backgroundColor = 'black';
    });
})