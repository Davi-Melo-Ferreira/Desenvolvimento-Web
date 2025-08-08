function calcularMedia (a, b, c) {
    let soma = a + b + c;
    media = soma / 3;
    return media;
}

media = calcularMedia(7, 8, 10);

console.log(`A média dos números dados é: ${media.toFixed(1)}`);