export function mencionar(mediaValor){
    let mencao;
    if (mediaValor === 10) {
        mencao = "A";
    } else if (mediaValor >= 6) {
        mencao = "PA";
    } else {
        mencao = "NA";
    }
    return mencao;
}