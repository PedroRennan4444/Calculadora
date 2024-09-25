var num1 = NaN;
var num2 = [];
var operacao = NaN;
var calculo = 0;

function num(botao) {
    num1 = parseInt(botao.value);
    num2.push(num1);
}

function  op(botao) {
    operacao = botao.value;

}
function result() {
    switch (operacao) {
        case "+":
            calculo = num2[0] + num2[1];
            break;
        case "-":
            calculo = num2[0] - num2[1];
            break;
        case "*":
            calculo = num2[0] * num2[1];
            break;
        case "/":
            calculo = num2[0] / num2[1];
            break;
    
    
    }
    num2 = [];
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = calculo;
}


