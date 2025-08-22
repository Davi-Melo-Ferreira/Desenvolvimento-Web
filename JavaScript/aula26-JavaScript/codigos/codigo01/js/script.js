let arrayExemplo = ['Maçã', 'Banana', 'Laranja'];

document.getElementById('botao-push').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let novoComprimento = array.push('Manga', 'Abacaxi');

    document.getElementById('resultado-push').innerHTML=`<strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elementos adicionados:</strong> "Manga", "Abacaxi",<br>
    <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

document.getElementById('botao-pop').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let elementoRemovido = array.pop();

    document.getElementById('resultado-pop').innerHTML=`
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento removido:</strong> ${elementoRemovido}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

document.getElementById('botao-unshift').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let novoComprimento = array.unshift('Manga', 'Abacaxi');

    document.getElementById('resultado-unshift').innerHTML=`
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

document.getElementById('botao-shift').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let elementoRemovido = array.shift();

    document.getElementById('resultado-shift').innerHTML=`
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento removido:</strong> ${elementoRemovido}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

document.getElementById('botao-splice').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let elementosRemovidos = array.splice(1, 1, 'Kiwi', 'Morango');

    document.getElementById('resultado-splice').innerHTML=`
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> array.splice(1, 1, 'Kiwi', 'Morango')<br>
    <strong>Elemento removido:</strong> [${elementosRemovidos.join(', ')}]<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]`;
});

document.getElementById('botao-slice').addEventListener('click', function() {
    let novoArray = arrayExemplo.slice(1, 3);

    document.getElementById('resultado-slice').innerHTML=`
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> array.slice(1, 3)<br>
    <strong>Novo array retornado:</strong> [${novoArray.join(', ')}]<br>
    <strong>Array modificado:</strong> [${arrayExemplo.join(', ')}]`;
});

document.getElementById('botao-limpar').addEventListener('click', function() {
    document.querySelector('.resultado').innerHTML = '';
});