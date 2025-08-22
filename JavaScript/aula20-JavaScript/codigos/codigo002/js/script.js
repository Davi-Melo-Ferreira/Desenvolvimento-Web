let idade = prompt("Qual sua idade?:");
let temsenha = prompt("Você tem a senhade acesso? (sim/não)");

idade = Number(idade);
temsenha = temsenha.toLowerCase();

if (idade >= 18 && temsenha === "sim"){
    alert("Acesso Permitido!");
} else if(idade < 18 || temsenha === "não"){
    alert("Acesso negado: idade insuficiente ou senha inválida.");
} else{
    alert("Dados inváldos. Tente Novamente");
}