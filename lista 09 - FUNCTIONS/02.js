/* Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
condição IF. */

var readlineSync = require("readline-sync");
var isprime = require("isprime");
var numero = "";
var resultado = 0;

function ePrimo() {
  numero = readlineSync.questionInt("Insira um numero: ");
  resultado = isprime(numero);
  return resultado;
}

ePrimo(numero);
if (resultado == true) {
  console.log("Seu numero é primo");
} else console.log("Seu numero não é primo");