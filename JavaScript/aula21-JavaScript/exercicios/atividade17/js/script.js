let peso = prompt("Digite seu Peso: ");
let altura = prompt("Digite sua Altura: ");

const calcularIMC = (peso, altura) =>{
    const imc = peso / (altura * altura);
    return imc
};

const indice = calcularIMC(peso, altura);

console.log("IMC: ",indice.toFixed(2));