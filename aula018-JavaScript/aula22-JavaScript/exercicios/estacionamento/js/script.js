const vagas = [
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga01
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga02
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga03
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga04
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga05
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga06
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga07
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga08
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}, //vaga09
    {disponivel: true, entrada: "10:00:00", saida: "20:00:00"}  //vaga10
]

// vagas.forEach((setor, index) =>{
//     console.log(`Vaga ${index+1}`);
//         console.log(setor);
// })

function adicionarCarro(disponivel, entrada, saida){
    let novoCarro ={
        disponivel: disponivel,
        entrada: entrada,
        saida: saida
    };
    vagas.push(novoCarro);
}

function exibirVaga() {
    console.log("Lista de Vaga:");
    vagas.forEach(function(vaga, indice){
        console.log(`Vaga ${indice + 1}:`);
        console.log(`   Disponível: ${vaga.disponivel}`);
        console.log(`   Entrada:  ${vaga.entrada}`);
        console.log(`   Saída:  ${vaga.saida}`);
        console.log("--------------------------");
    });
}

exibirVaga();