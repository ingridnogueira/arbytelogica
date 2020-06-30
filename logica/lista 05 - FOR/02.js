/* Faça um programa que leia dois números. O primeiro é o valor inicial de um contador e o segundo é o valor final do contador. Verifique se o valor inicial fornecido é inferior ao valor final).
Usando o comando For, escreva na tela uma contagem que comece no primeiro numero lido, escreva os números
seguintes colocando apenas um número em cada nova linha da tela até chegar ao valor final indicado.
 */

var rs = require("readline-sync");
var inicio;
var fim;

inicio = rs.questionInt("Digite o valor inicial do contador: ");
fim = rs.questionInt("Digite o valor final do contador: ");

if (inicio > fim) {
  fim = rs.questionInt(`Digite um valor final maior que ${inicio}: `);
}

for (i = inicio; i <= fim; i++) {
  console.log(i);
}