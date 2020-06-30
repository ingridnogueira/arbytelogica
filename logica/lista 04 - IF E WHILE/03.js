/*(OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * **/

var rs = require('readline-sync');
var num = rs.questionInt('Insira um numero: ')
var cont = 1;


while (cont <= num) {
    console.log('*'.repeat(cont));
    cont++;
}