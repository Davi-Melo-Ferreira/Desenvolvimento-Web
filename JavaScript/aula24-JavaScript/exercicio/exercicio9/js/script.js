document.addEventListener('DOMContentLoaded', function(){
    const paragrafo = document.getElementById('paragrafo');
    const titulo = document.getElementById('titulo');

    document.getElementById('btnClaro').addEventListener('click', function(){
        paragrafo.style.color = "black";
        titulo.style.color = 'black';
        document.body.style.backgroundColor = 'white';
    });

    document.getElementById('btnEscuro').addEventListener('click', function(){
        paragrafo.style.color = "white";
        titulo.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    });
})