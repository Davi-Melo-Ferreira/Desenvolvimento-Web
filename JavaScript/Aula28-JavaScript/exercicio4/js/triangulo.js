export function triangulo(a, b, c) {
    const valido = a + b > c && a + c > b && b + c > a;
    return `Os valores ${a}, ${b} e ${c} ${valido ? "" : "Não"} formam um Triângulo`;
}