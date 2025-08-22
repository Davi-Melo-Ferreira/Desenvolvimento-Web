const calcularEnergiaCinetica = (massa, velocidade) => 0.5 * massa * (Math.pow(velocidade, 2));

const massa = 1200;
const velocidadeInicial = 25;
const velocidadeFinal = 50;

const energiaInicial = calcularEnergiaCinetica(massa, velocidadeInicial);
const energiaFinal = calcularEnergiaCinetica(massa, velocidadeFinal);

console.log("Energia cinética com 25 m/s:", energiaInicial, "Joules");
console.log("Energia cinética com 50 m/s:", energiaFinal, "Joules");

console.log("A energia cinética quadruplicou quando a velocidade dobrou.");
console.log("Isso mostra que a energia cinética é proporcional ao quadrado da velocidade.");
