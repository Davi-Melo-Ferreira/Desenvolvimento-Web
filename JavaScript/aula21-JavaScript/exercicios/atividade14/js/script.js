function somar1(a, b) {
    return a + b;
};

function saudar1(nome) {
    return "Olá, " + nome + "!";
};

function dobrarNumero1(n) {
    return n * 2;
};

soma = somar1(1, 2);
saudacao = saudar1("Davi");
dobro = dobrarNumero1(5);

console.log("Antes: ")
console.log(`Soma: ${soma}`);
console.log(`Saudação: ${saudacao}`);
console.log(`Dobro: ${dobro}`);

// Funções arrow ↓

const somar2 = (a, b) => a + b;

const saudar2 = nome => `Olá, ${nome}!`;

const dobrarNumero2 = n => n * 2;

soma2 = somar2(1, 2);
saudacao2 = saudar2("Davi");
dobro2 = dobrarNumero2(5);

console.log("\nDepois: ")
console.log(`Soma: ${soma2}`);
console.log(`Saudação: ${saudacao2}`);
console.log(`Dobro: ${dobro2}`);