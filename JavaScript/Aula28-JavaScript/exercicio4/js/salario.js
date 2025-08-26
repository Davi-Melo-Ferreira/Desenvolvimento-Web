export function salario(valor) {
    if (isNaN(valor) || valor <= 0) {
        return "Digite um valor acima de 0";
    }
    if (valor < 1000) {
        const novo = valor * 1.10;
        return `Salário de $${valor.toFixed(2)} alterado para ${novo.toFixed(2)}`;
    } else if (valor > 1500) {
        const novo = valor * 1.05;
        return `Salário de $${valor.toFixed(2)} alterado para ${novo.toFixed(2)}`;
    }
    return "Salário não foi alterado";
}