import { media } from './js/media.js'

let alunos = []
document.addEventListener('DOMContentLoaded', function(){
    const nome = document.getElementById('nomeInput').value;
    const frequencia = document.getElementById('frequenciaInput').value;
    const notas = document.getElementById('notasInput').value;
    const  saida = document.getElementById('saidaInput');
    const limpar = () => saida.innerHTML = '';

    document.getElementById('btnAdicionar').addEventListener('click', function(){
        saida.innerHTML = media(frequencia);
    })
})