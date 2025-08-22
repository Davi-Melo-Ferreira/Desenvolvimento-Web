let data = prompt("Insira o ano em que nasceu:");
const ano_atual = new Date().getFullYear()
let calcular_data = ano_atual - data

console.log("Você tem", calcular_data, "anos")

