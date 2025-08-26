export function maior(n1, n2, n3) {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        return "Apenas números válidos.";
    }
    if (n1 === n2 && n2 === n3) {
        return "Todos os números são iguais.";
    }
    const max = Math.max(n1, n2, n3);
    const min = Math.min(n1, n2, n3);
    return `Maior número: ${max} <br> Menor número: ${min}`;
}