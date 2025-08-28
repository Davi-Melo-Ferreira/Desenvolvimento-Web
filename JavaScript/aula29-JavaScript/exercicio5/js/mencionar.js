export function mencionar(mediaValor){
    let mencao = undefined;
    if (mediaValor < 0){
        return;
    } else if (mediaValor === 10) {
        mencao = "A";
    } else if (mediaValor >= 6) {
        mencao = "PA";
    } else {
        mencao = "NA";
    }
    return mencao;
}