let texto = prompt("Digite um texto(palíndromo ou não)");

let textolimpo = texto.replace(/ /g,'');
// / / g encontra o que tiver inserido aqui / / e recoloca o que tiver dentro da " "

let invertida = texto.split('').reverse().join('');
// split = ['a','b','c']
// reverse = ['c','b','a']
// join = 'abc'


// Comparação manual dos extremos
if (invertida === texto){
    alert("PALÍNDROMO");
} else{
    console.log("Não é um palíndromo");
}
