/*Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
...
N x N = N2
Após isso solicite o usuário um número e forneça o argumento do usuário para a função.*/

var user = require('readline-sync');
var num = user.questionInt('Digite o valor que deseja calcular a tabuada: ');
tabuada(num);

function tabuada(num) {
    for (var i = 1; i <= num; i++) {
        var calculo = i * num;
        console.log(i + ' x ' + num + " = " + calculo);
    }
}