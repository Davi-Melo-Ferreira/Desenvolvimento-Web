document.getElementById('btnParimpar').addEventListener('click', function(){
    const entradaParimpar = document.getElementById('entradaParimpar');
    const saidaParimpar = document.getElementById('saidaParimpar');
    const entrada = entradaParimpar.value;
    saidaParimpar.innerHTML = '';

    if (isNaN(entrada)){
        saidaParimpar.innerHTML = "Digite um número";
    } else{
        const saida = entrada % 2 == 0 ? `${entrada} é par` : `${entrada} é ímpar`;
        saidaParimpar.innerHTML = `${saida}`;
    }
})

document.getElementById('btnMaior').addEventListener('click', function(){
    const n1 = document.getElementById('entradaMaior1').value;
    const n2 = document.getElementById('entradaMaior2').value;
    const n3 = document.getElementById('entradaMaior3').value;
    const saidaMaior = document.getElementById('saidaMaior');
    saidaMaior.innerHTML = '';

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        saidaMaior.innerHTML = "Apenas números válidos.";
        return;
    } else if(n1 === n2 && n2 === n3) {
        saidaMaior.innerHTML = "Todos os números são iguais.";
    } else {
        const maior = Math.max(n1, n2, n3);
        const menor = Math.min(n1, n2, n3);
        saidaMaior.innerHTML = `Maior número: ${maior} <br> Menor número: ${menor}`;
    }
})

document.getElementById('btnVelocidade').addEventListener('click', function(){
    const entradaVelocidade = document.getElementById('entradaVelocidade');
    const saidaVelocidade = document.getElementById('saidaVelocidade');
    const entrada = entradaVelocidade.value;
    saidaVelocidade.innerHTML = '';

    const saida = entrada > 60 ? 'Acima do Limite': 'Abaixo do Limite';

    saidaVelocidade.innerHTML = `A velocidade está ${saida}`;
})


document.getElementById('btnSalario').addEventListener('click', function(){
    const entradaSalario = document.getElementById('entradaSalario');
    const saidaSalario = document.getElementById('saidaSalario');
    const entrada = parseFloat(entradaSalario.value);
    saidaSalario.innerHTML = '';

    if (isNaN(entrada) || entrada <= 0){
        saidaSalario.innerHTML = "Digite um valor acima de 0";
        return;
    }
    
    if(entrada < 1000){
        const valor = entrada + (entrada * 0.10);
        saidaSalario.innerHTML = `Salário de $${entrada.toFixed(2)} alterado para ${valor.toFixed(2)}`;
    } else if(entrada > 1500){
        const valor = entrada + (entrada * 0.05);
        saidaSalario.innerHTML = `Salário de $${entrada.toFixed(2)} alterado para ${valor.toFixed(2)}`;
    } else{
        saidaSalario.innerHTML = "Salário não foi alterado";
    }
})

document.getElementById('btnPassagem').addEventListener('click', function(){
    const entradaPassagem = document.getElementById('entradaPassagem');
    const saidaPassagem = document.getElementById('saidaPassagem');
    const entrada = Number(entradaPassagem.value);
    saidaPassagem.innerHTML = '';

    const valor = entrada > 200 ? 0.70 * entrada : 0.40 * entrada;

    saidaPassagem.innerHTML = `Valor: $${valor}(${entrada}km)`;
})

document.getElementById('btnBissexto').addEventListener('click', function(){
    const entradaBissexto = document.getElementById('entradaBissexto');
    const saidaBissexto = document.getElementById('saidaBissexto');
    const entrada = Number(entradaBissexto.value);
    saidaBissexto.innerHTML = '';

    const bissexto = (entrada % 4 === 0 && entrada % 100 !== 0) || (entrada % 400 === 0) ? "é Bissexto" : "Não é Bissexto";

    saidaBissexto.innerHTML = `O ano ${entrada} ${bissexto}`;
})

document.getElementById('btnPesquisar').addEventListener('click', function(){
    const entradaPesquisar1 = document.getElementById('entradaPesquisar1');
    const entradaPesquisar2 = document.getElementById('entradaPesquisar2');
    const entradaPesquisar3 = document.getElementById('entradaPesquisar3');
    const saidaPesquisar = document.getElementById('saidaPesquisar');
    const a = Number(entradaPesquisar1.value);
    const b = Number(entradaPesquisar2.value);
    const c = Number(entradaPesquisar3.value);
    saidaPesquisar.innerHTML = '';

    const triangulo = a + b > c && a + c > b && b + c > a ? "" : "Não";

    saidaPesquisar.innerHTML = `Os valores ${a}, ${b} e ${c} ${triangulo} formam um Triângulo`;
})

// document.getElementById('btn').addEventListener('click', function(){
//     const entrada = document.getElementById('entrada');
//     const saida = document.getElementById('saida');
//     const entrada = entradaVelocidade.value;
//     saida.innerHTML = '';

//     saida.innerHTML = `A velocidade está ${saida}`;
// })

