export function mediar(notas) {
    const lista = notas.split(', ').map(num => parseFloat(num));
    if (lista.some(notas => isNaN(notas))){
        return
    }
    if (lista.length !== 4) {
        alert('Média deve conter exatamente 4 números');
        return;
    }

    let soma = 0;
    lista.forEach(element => {
        soma += element;
    });

    return soma / lista.length;
}