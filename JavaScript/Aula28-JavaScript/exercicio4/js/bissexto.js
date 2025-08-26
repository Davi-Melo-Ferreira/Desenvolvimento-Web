export function bissexto(ano) {
    const msg = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
        ? "é Bissexto"
        : "Não é Bissexto";
    return `O ano ${ano} ${msg}`;
}