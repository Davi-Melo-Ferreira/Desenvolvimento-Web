let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mês: "));
let ano = Number(prompt("Digite o ano: "));

const retornarData = (dia, mes, ano) => {
    console.log(`${dia}/${mes}/${ano}`);
};

data = retornarData(dia, mes, ano);

console.log(data);