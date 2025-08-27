import { media } from './js/media.js'
import { mencionar } from './js/mencionar.js'

document.addEventListener('DOMContentLoaded', function () {
    const saida = document.getElementById('saidaInput');
    const limpar = () => saida.innerHTML = '';
    let alunos = [];

    const add = alunos => {
        saida.innerHTML = ''; // Limpa antes de adicionar todos
        alunos.forEach(({ nome, frequencia, media, mencao }) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${nome}</td>
                <td>${frequencia}%</td>
                <td>${media}</td>
                <td>${mencao}</td>
                <td><button id="btnRemover">Remover</button></td>`;
            saida.appendChild(tr);
        });
    }

    document.getElementById('btnAdicionar').addEventListener('click', function () {
        const notas = document.getElementById('notasInput').value;
        const nome = document.getElementById('nomeInput').value;
        const frequencia = document.getElementById('frequenciaInput').value;
        const mediaValor = media(notas);
        const mencaoValor = mencionar(mediaValor);
        alunos.push({ nome, frequencia, media: mediaValor, mencao: mencaoValor });
        add(alunos);
    });

})