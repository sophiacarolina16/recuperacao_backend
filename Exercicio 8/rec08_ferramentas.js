const entrada = require('readline-sync');

let ferramentas = [];

for (let i = 0; i < 4; i++) {
    console.log(`\n--- Cadastro da Ferramenta ${i + 1} ---`);
    let nome = entrada.question('Nome da ferramenta: ');
    let quantidade = entrada.questionInt('Quantidade disponivel: ');
    let minimo = entrada.questionInt('Quantidade minima: ');

 
    ferramentas.push({
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    });
}

console.log("\n--- Relatório de Ferramentas ---");

for (let i = 0; i < ferramentas.length; i++) {
    let f = ferramentas[i];
    let situacao = "";

    if (f.quantidade < f.minimo) {
        situacao = "REPOR";
    } else {
        situacao = "ESTOQUE SUFICIENTE";
    }

    console.log(`Ferramenta: ${f.nome} | Qtd: ${f.quantidade} | Mín: ${f.minimo} | Situação: ${situacao}`);
}

