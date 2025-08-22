let entrada = prompt("Entre com o contador: ");

// Verifica se a entrada é válida
if (entrada === null || entrada.trim() === '' || isNaN(Number(entrada))) {
    alert("Entrada inválida! Digite um número.");
} else {
    let cont = Number(entrada);
    let c = 0;

    while (c < 5){
        console.log(`Contador do while = ${c} || Var controladora = ${cont}`);
        cont += 1;
        c += 1;
    }
}