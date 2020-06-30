/* Faça um programa que leia o valor de um produto X e leia a quantidade de reais
de um cofrinho que contenha:
a. N moedas de 1 real;       b. N moedas de 50 centavos;
c. N moedas de 25 centavos;    d. N moedas de 10 centavos;
e. N moedas de 5 centavos;    f. N moedas de 1 centavos.
O programa deverá verificar se o total de reais que contém no cofrinho é o
bastante para compra o produto X e imprimir se possui ou não valor suficiente*/

var user = require('readline-sync');
var produto = user.questionInt("Digite o Valor do Produto: ");
var umReal = user.questionInt("Quantidade de moedas de 1 real: ");
var cinquentaCents = user.questionInt("Quantidade de moedas de 50 centavos: ");
var vinteCincoCents = user.questionInt("Quantidade de moedas de 25 centavos: ");
var dezCents = user.questionInt("Quantidade de moedas de 10 centavos: ");
var cincoCents = user.questionInt("Quantidade de moedas de 5 centavos: ");
var umCents = user.questionInt("Quantidade de moedas de 1 centavo: ");
var total = umReal * 1 + cinquentaCents * 0.50 + vinteCincoCents * 0.25 + dezCents * 0.10 + cincoCents * 0.05 + umCents * 0.01;
if (total >= produto) {
    console.log("Voce possui valor suficiente");
} else {
    console.log("Voce nao possui valor suficiente");
}