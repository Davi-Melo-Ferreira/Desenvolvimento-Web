export function parimpar(entrada) {
    if (isNaN(entrada)){
        return "Digite um número";
    } else {
        return entrada % 2 == 0 ? `${entrada} é par` : `${entrada} é ímpar`;
    }
}