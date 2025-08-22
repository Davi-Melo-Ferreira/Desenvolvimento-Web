let texto = prompt("Digite um texto(palíndromo ou não)");

let textolimpo = texto.toLowerCase().replace(/ /g,'');
// removendo espaços

let invertida = textolimpo.split('').reverse().join('');
// split = ['a','b','c']
// reverse = ['c','b','a']
// join = 'abc'


// Comparação manual dos extremos
if (invertida === textolimpo){
    alert("PALÍNDROMO");
} else{
    console.log("Não é um palíndromo");
}
