function calcularMaoDeObra(horas) {
    return horas * 95.00;
}

function calcularTotal(valorMateriais, valorMaoDeObra) {
    return valorMateriais + valorMaoDeObra;
}

function verificarDesconto(total) {
    if(total > 1000){
        return "Desconto de 10%"
    } else {
        return "Sem Desconto"
    }
}






module.exports = { 
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
};