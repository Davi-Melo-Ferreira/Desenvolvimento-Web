let nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10:)"));
let nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10:)"));
let nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10:)"));
let nota4 = parseFloat(prompt("Digite a quarta nota (0 a 10:)"));

let media = (nota1, nota2, nota3, nota4) / 4;

let mencao;

if (media >= 9){
    mencao = "Aprovado com Mérito";
} else if (media >= 7){
    mencao = "Aprovado";
} else if (media >= 5){
    mencao = "Recuperação";
} else{
    mencao = "Reprovado";
}

console.log(`Média: ${media.toFixed(2)} - ${mencao}`);