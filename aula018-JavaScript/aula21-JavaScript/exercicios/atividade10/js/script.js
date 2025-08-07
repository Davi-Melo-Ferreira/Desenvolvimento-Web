let pedido = prompt("Digite o Produto: ");

function processarPedido(nome, callback){
    console.log("Processando Pedido...");
    callback();
};

function confirmarPedido(){
    setTimeout(() =>{
        console.log(`Pedido de ${pedido} Processado`);
    }, 3000);
}

processarPedido(pedido, confirmarPedido);