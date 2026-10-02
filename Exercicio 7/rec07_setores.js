const entrada = require('readline-sync');


let setores = [];

for (let i = 0; i < 6; i++) {
    let nomeSetor = entrada.question(`Digite o nome do setor ${i + 1}: `);
    setores.push(nomeSetor);
}

console.log("\n--- Lista de Setores ---");

for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}
