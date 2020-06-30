/* Faça um algoritmo que receba um número e diga se ele é par ou ímpar
Utilize o pacote : https://www.npmjs.com/package/is-odd */

var isOdd = require("is-odd");
var rs = require("readline-sync");

var numero = rs.questionInt("Insira um numero: ");

var resultado = isOdd(numero);
if (resultado == true) {
  console.log("numero impar");
} else {
  console.log("numero par");
}