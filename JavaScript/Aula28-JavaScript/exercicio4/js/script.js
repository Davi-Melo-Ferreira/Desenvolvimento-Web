import { parimpar } from './parimpar.js';
import { maior } from './maior.js';
import { velocidade } from './velocidade.js';
import { salario } from './salario.js';
import { passagem } from './passagem.js';
import { bissexto } from './bissexto.js';
import { triangulo } from './triangulo.js';
import { equacao } from './equacao.js';

document.getElementById('btnParimpar').addEventListener('click', function(){
    const entradaParimpar = document.getElementById('entradaParimpar');
    const saidaParimpar = document.getElementById('saidaParimpar');
    const entrada = entradaParimpar.value;
    saidaParimpar.innerHTML = '';
    saidaParimpar.innerHTML = parimpar(entrada);
})

document.getElementById('btnMaior').addEventListener('click', function(){
    const n1 = document.getElementById('entradaMaior1').value;
    const n2 = document.getElementById('entradaMaior2').value;
    const n3 = document.getElementById('entradaMaior3').value;
    const saidaMaior = document.getElementById('saidaMaior');
    saidaMaior.innerHTML = '';
    saidaMaior.innerHTML = maior(n1, n2, n3);
})

document.getElementById('btnVelocidade').addEventListener('click', function(){
    const entradaVelocidade = document.getElementById('entradaVelocidade');
    const saidaVelocidade = document.getElementById('saidaVelocidade');
    const entrada = entradaVelocidade.value;
    saidaVelocidade.innerHTML = '';

    saidaVelocidade.innerHTML = velocidade(entrada);
})


document.getElementById('btnSalario').addEventListener('click', function(){
    const entradaSalario = document.getElementById('entradaSalario');
    const saidaSalario = document.getElementById('saidaSalario');
    const entrada = parseFloat(entradaSalario.value);
    saidaSalario.innerHTML = '';
    saidaSalario.innerHTML = salario(entrada);
})

document.getElementById('btnPassagem').addEventListener('click', function(){
    const entradaPassagem = document.getElementById('entradaPassagem');
    const saidaPassagem = document.getElementById('saidaPassagem');
    const entrada = Number(entradaPassagem.value);
    saidaPassagem.innerHTML = '';
    saidaPassagem.innerHTML = passagem(entrada);
})

document.getElementById('btnBissexto').addEventListener('click', function(){
    const entradaBissexto = document.getElementById('entradaBissexto');
    const saidaBissexto = document.getElementById('saidaBissexto');
    const entrada = Number(entradaBissexto.value);
    saidaBissexto.innerHTML = '';
    saidaBissexto.innerHTML = bissexto(entrada);
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

    saidaPesquisar.innerHTML = triangulo(a, b, c);
})

document.getElementById('btnEquacao').addEventListener('click', function(){
    const entradaEquacao1 = document.getElementById('entradaEquacao1');
    const entradaEquacao2 = document.getElementById('entradaEquacao2');
    const entradaEquacao3 = document.getElementById('entradaEquacao3');
    const saidaEquacao = document.getElementById('saidaEquacao');
    const a = parseFloat(entradaEquacao1.value);
    const b = parseFloat(entradaEquacao2.value);
    const c = parseFloat(entradaEquacao3.value);
    saidaEquacao.innerHTML = '';
    saidaEquacao.innerHTML = equacao(a, b, c);
})