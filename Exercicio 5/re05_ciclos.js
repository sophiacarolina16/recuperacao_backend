const entrada = require('readline-sync');

let produtosPorCiclo = entrada.questionFloat('Digite a quantidade de produtos por ciclo: ');

let producaoAcumulada = 0;


for (let ciclo = 1; ciclo <= 12; ciclo++) {
    producaoAcumulada += produtosPorCiclo;
    console.log(`Ciclo ${ciclo}: ${producaoAcumulada} produtos acumulados`);
}
