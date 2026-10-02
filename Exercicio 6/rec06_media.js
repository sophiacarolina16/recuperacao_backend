const entrada = require('readline-sync');

let somaTempos = 0;
const totalAtendimentos = 6;


for (let i = 1; i <= totalAtendimentos; i++) {
    let tempo = entrada.questionFloat(`Digite o tempo do atendimento ${i} em minutos: `);
    somaTempos += tempo;
}


let media = somaTempos / totalAtendimentos;

console.log(`Soma dos tempos: ${somaTempos} minutos`);
console.log(`Média dos tempos: ${media.toFixed(2)} minutos`);
