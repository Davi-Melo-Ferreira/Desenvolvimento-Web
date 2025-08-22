function executarOperacao (a, b, callback) {
    callback(a,b);
};

function operando(a, b){
    console.log(`${a} * ${b} = ${a*b}`);
    console.log(`${a} + ${b} = ${a+b}`);
    console.log(`${a} - ${b} = ${a-b}`);
};

let invocacao = executarOperacao(10, 5, operando);