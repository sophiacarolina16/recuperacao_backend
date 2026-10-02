
const entrada = require('readline-sync');

const nivel = entrada.questionFloat("Digite o nivel de vibracao: ");
if(nivel <= 3){
    console.log(`Nivel: ESTAVEL | ${nivel} mms/s`);
} else if(nivel > 3 && nivel <= 6){
    console.log(`Nivel: ATENCAO | ${nivel} mms/s`);
} else {
    console.log(`Nivel: CRITICO | ${nivel} mms/s`);
}