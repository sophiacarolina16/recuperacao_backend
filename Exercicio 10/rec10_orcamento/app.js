const entrada = require('readline-sync');

const regras = require('./funcoes_orcamento');

const nomeCliente = entrada.question("Digite o nome do cliente: ");

const valorMateriais = entrada.questionFloat("Digite o valor dos materiais: ");
const horasTrabalhadas = entrada.questionInt("Digite a quantidade de horas trabalhadas: ");

const valorMaoDeObra = regras.calcularMaoDeObra(horasTrabalhadas);
const total = regras.calcularTotal(valorMateriais, valorMaoDeObra);
const desconto = regras.verificarDesconto(total);

console.log(`Cliente: ${nomeCliente} | Valor dos materiais: R$ ${valorMateriais.toFixed(2)} | Valor da mao de obra: R$ ${valorMaoDeObra.toFixed(2)} | Total: R$ ${total.toFixed(2)} | Desconto: ${desconto}`);

