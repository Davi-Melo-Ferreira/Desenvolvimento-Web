let nome = prompt("Digite seu nome: ");

function cumprimentar (nome) {
    if (nome == null || nome.trim() == ' '){
        console.log("Olá [Visitante]");
    } else{
        console.log(`Olá ${nome}`);
    }
};

cumprimentar(nome);