const mostrarResultado = (mensagem) =>{
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

document.addEventListener('DOMContentLoaded', function() {
    const btnDobro = document.getElementById('dobro');
    const btnTriplo = document.getElementById('triplo');
    const entradaInput = document.getElementById('entradaInput');

    btnDobro.addEventListener('click', function(){
        const entrada = entradaInput.value;
        const dobro = (entrada) => entrada * 2;
        const dobrar = dobro(entrada);
        mostrarResultado(dobrar);
    })

    btnTriplo.addEventListener('click', function(){
        const entrada = entradaInput.value;
        const triplo = (entrada) => entrada * 3;
        const triplicar = triplo(entrada);
        mostrarResultado(triplicar);
    })
})