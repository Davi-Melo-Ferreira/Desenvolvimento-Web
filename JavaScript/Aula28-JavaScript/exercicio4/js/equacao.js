export function equacao(a, b, c) {
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        return 'Não existem raízes reais.';
    }
    if (delta === 0) {
        const x = -b / (2 * a);
        return `Raiz única: x = ${x}`;
    } else{
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `As raízes são: x₁ = ${x1}, x₂ = ${x2}`;
    }
}