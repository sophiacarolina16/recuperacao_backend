const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}
function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "Excelente";
    } else if (percentual >= 75 && percentual < 89.99) {
        return "Adequado";
    } else {
        return "revisar processo";
    }
}

const totalProduzido = entrada.questionInt("Digite a quantidade total produzida: ");

const totalAprovado = entrada.questionInt("Digite a quantidade total util: ");


const aproveitamento = calcularAproveitamento(totalAprovado, totalProduzido);
const classificacao = classificarAproveitamento(aproveitamento);

console.log(`Aproveitamento: ${aproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);