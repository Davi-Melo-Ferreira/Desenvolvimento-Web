var x = 10;
var x = 20; // Redeclaração permitida
console.log(x); // resultado : 20

let y = 30;
// let y = 40 não funciona
y = 40; // reatribuição permitida
console.log(y); // resultado 40

const z = 50;
// z = 60 não funciona
console.log(z); 

{
    var a = 1; // global
    let b = 2; // local
    const c = 3; // local
}
console.log(a); // 1