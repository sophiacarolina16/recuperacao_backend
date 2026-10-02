const entrada = require('readline-sync');

const nivel = entrada.questionFloat("Digite o nivel do oleo em porcentagem: ");
if(nivel >= 40 && nivel <= 80){
    console.log(`Nivel normal | ${nivel}`);
} else {
    console.log(`Inspeção necessaria | ${nivel}`);
};