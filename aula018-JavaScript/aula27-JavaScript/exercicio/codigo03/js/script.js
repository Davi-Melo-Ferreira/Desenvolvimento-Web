const produtos = [
    {nome: "Sabonete Natural", preco: 15.0, categoria: "cosmetico"},
    {nome: "Shampoo Orgânico", preco: 25.0, categoria: "cosmetico"},
    {nome: "Granola Artesanal", preco: 18.5, categoria: "alimento"},
    {nome: "Mel puro", preco: 22.0, categoria: "alimento"},
];

const formulario = document.getElementById('opcoes');
const saida = document.getElementById('saida');
const saidaCalculo = document.getElementById('saidaCalculo');
const limpar = () => saida.innerHTML = '';

const add = lista => {
    const list = '';
    lista.forEach((element) => {
        const li = document.createElement('li');
        li.innerHTML += `<strong>${element.nome}</strong><br> ${element.preco.toFixed(2)}`;
        saida.appendChild(li);
    });
}

formulario.addEventListener('change', function(){
    limpar();
    const tipo = this.value;
    if (tipo === "cosmetico"){
            const categoriaCosmeticos = produtos.filter(function(id){
            return id.categoria == "cosmetico";
            })
            add(categoriaCosmeticos);

    const somaTotal = categoriaCosmeticos.reduce(function(acumulador, numeroAtual){
        return acumulador + numeroAtual.preco;
    }, 0);
    saidaCalculo.textContent = `Valor Total: ${somaTotal.toFixed(2)}`;
        
    } else if(tipo === "alimento"){
            const categoriaAlimentos = produtos.filter(function(id){
            return id.categoria == "alimento";
            })
            add(categoriaAlimentos);
        
    const somaTotal = categoriaAlimentos.reduce(function(acumulador, numeroAtual){
        return acumulador + numeroAtual.preco;
    }, 0);
    saidaCalculo.textContent = `Valor Total: ${somaTotal.toFixed(2)}`;

    } else{
        add(produtos);
        const somaTotal = produtos.reduce(function(acumulador, numeroAtual){
        return acumulador + numeroAtual.preco;
    }, 0);
    saidaCalculo.textContent = `Valor Total: ${somaTotal.toFixed(2)}`;
    }
});