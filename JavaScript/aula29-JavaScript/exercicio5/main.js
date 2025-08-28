import { mediar } from './js/media.js'
import { mencionar } from './js/mencionar.js'

document.addEventListener('DOMContentLoaded', function () {
    const saida = document.getElementById('saidaInput');
    const limpar = () => saida.innerHTML = '';
    let alunos = [];
    let indice = 0;

    const add = array => {
        limpar();
        array.forEach(({ nome, frequencia, media, mencao, id}) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${nome}</td>
                <td>${frequencia}%</td>
                <td>${media}</td>
                <td>${mencao}</td>
                <td><button class="rounded" data-id="${id}">Remover</button></td>`;
            saida.appendChild(tr);
        });
    }

    // DELEGAÇÃO DE EVENTOS
    saida.addEventListener('click', function(event) { // cria um listener que identifica cliques na saida
        const btn = event.target; // pega qual evento foi clicado 
        if (btn.tagName === 'BUTTON' && btn.dataset.id) { // verificação de tag e se possui id com dataset
            const id = parseInt(btn.dataset.id); // casting do id pego no dataset.id
            const index = alunos.findIndex(aluno => aluno.id === id); // procura o objeto dentro do array com o id do botão pressionado
                if (index > -1){ // se o array alunos estiver vazio, findIndex retornará -1
                    alunos.splice(index, 1)
                    add(alunos);
                }
        }
    });
    

    document.getElementById('btnAdicionar').addEventListener('click', function () {
        const notas = document.getElementById('notasInput').value;
        const nome = document.getElementById('nomeInput').value;
        const frequencia = document.getElementById('frequenciaInput').value;
        const mediaValor = mediar(notas);
        const mencaoValor = mencionar(mediaValor);
        
        if (mediaValor == undefined || mencaoValor == undefined || frequencia < 0){
            alert('Preencha os dados corretamente!');
            return;
        }
        alunos.push({id: indice++, nome, frequencia, media: mediaValor, mencao: mencaoValor });
        add(alunos);
    });
});