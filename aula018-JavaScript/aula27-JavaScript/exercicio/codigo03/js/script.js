const produtos = [
    {nome: "Sabonete Natural", preco: 15.0, categoria: "cosmetico"},
    {nome: "Shampoo Orgânico", preco: 25.0, categoria: "cosmetico"},
    {nome: "Granola Artesanal", preco: 18.5, categoria: "alimento"},
    {nome: "Mel puro", preco: 22.0, categoria: "alimento"},
];

const saida = document.getElementById('saida');
const saidaCalculo = document.getElementById('saidaCalculo');
const limpar = () => saida.innerHTML = '';

const add = lista => {
    lista.forEach(({nome, preco}) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${nome}</strong><br> ${preco.toFixed(2)}`;
        saida.appendChild(li);
    });
}

document.getElementById('opcoes').addEventListener('change', function(){
    limpar();
    const tipo = this.value;
    const categoria = tipo == "todos" ? produtos : produtos.filter(id => id.categoria == tipo);
    add(categoria);

    const somaTotal = categoria.reduce((acumulador, {preco}) => acumulador + preco, 0);
    saidaCalculo.textContent = `Valor Total: ${somaTotal.toFixed(2)}`;
});