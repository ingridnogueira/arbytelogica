/*Faça um algoritmo que receba um número e diga se ele é primo ou não
Utilize o pacote : https://www.npmjs.com/package/prime-number*/

var rs = require("readline-sync");
const isPrime = require("prime-number");

var num = rs.questionInt("Digite um numero inteiro: ");

if (isPrime(num)) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}