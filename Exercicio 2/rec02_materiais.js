const entrada = require('readline-sync');

const nome = entrada.question('Digite o nome da peca: ');  
const quantidade = entrada.questionInt('Digite a quantidade de pecas compradas: ');
const preco = entrada.questionFloat('Digite o preco unitario da peca: ');

const total = quantidade * preco;

console.log(`---Relatorio---`);
console.log(`O nome da peca e ${nome} | A quantidade de pecas compradas e ${quantidade} | O preco unitario da peca e ${preco} | O total a ser pago e ${total}`);

