export function passagem(distancia) {
    const valor = distancia > 200 ? 0.70 * distancia : 0.40 * distancia;
    return `Valor: $${valor} (${distancia}km)`;
}