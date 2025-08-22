let pessoas = [
    { nome: "João Silva", idade: 30, email: "joao@email.com"},
    { nome: "Maria Souza", idade: 25, email: "maria@email.com"},
    { nome: "Carlos Lima", idade: 40, email: "carlos@email.com"}
];

function adicionarPessoa(nome, idade, email){
    let novaPessoa ={
        nome: nome,
        idade: idade,
        email: email
    };
    pessoas.push(novaPessoa);
}

function exibirPessoas() {
    console.log("Lista de Pessoas:");
    pessoas.forEach(function(pessoa, indice){
        console.log(`Pessoa ${indice + 1}:`);
        console.log(`   Nome: ${pessoa.nome}:`);
        console.log(`   Idade:  ${pessoa.idade}:`);
        console.log(`   Email:  ${pessoa.email}:`);
        console.log("--------------------------");
    });
}

adicionarPessoa("Ana Beatriz", 25, "anab@email.com");

exibirPessoas();