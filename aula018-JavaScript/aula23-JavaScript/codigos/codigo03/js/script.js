document.addEventListener('DOMContentLoaded', function(){
    const botao = document.getElementById('btnMostrarDia');

    const entrada = document.getElementById('numeroDia');

    const saida = document.getElementById('respostaDia');

    botao.addEventListener('click', function(){
        const numero = parseInt(entrada.value);

        switch (numero){
            case 1:
                saida.textContent = 'Domingo';
                break;
            case 2:
                saida.textContent = 'Segunda-feira';
                break;
            case 3:
                saida.textContent = 'Terça-feira';
                break;
            case 4:
                saida.textContent = 'Quarta-feira';
                break;
            case 5:
                saida.textContent = 'Quinta-feira';
                break;
            case 6:
                saida.textContent = 'Sexta-feira';
                break;
            case 7:
                saida.textContent = 'Sábado';
                break;
            default:
                saida.textContent = 'Número inválido!';
                break;
        }
    })
})