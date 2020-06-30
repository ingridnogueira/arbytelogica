// Faça um programa que recebe um número e imprima todos os números pares de 0 até
// o número inserido.
// Ex: usuário inseriu 8
// O programa imprime
// 0
// 2
// 4
// 6
// 8

var rs = require("readline-sync");

var numero = rs.questionInt("Insira um numero: ");

var resultado = 0;

var i = 0;

console.log(resultado);

while (i < numero - numero / 2) {
  var resultado = resultado + 2;
  console.log(resultado);
  i++;
}
