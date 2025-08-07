while(true){
    var nota = prompt("Digite uma nota de 0-10:");
    if (nota > 10 || nota < 0){
            alert("Apenas Notas de 0-10.");
        } else{
            break
        };
};

let analisarNota = nota => {
        if (nota >= 7){
            console.log('Passou');
        } else if (nota > 5 && nota < 6.9){
            console.log('recuperação');
        } else if (nota < 5){
            console.log('reprovado');
        }
    };

Analisar = analisarNota(nota);