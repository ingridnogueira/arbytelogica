// Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
// usar o operador de multiplicação (*)

const readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("Digite um numero: ");
var numero2 = readlineSync.questionInt("Digite outro numero: ");

var contador = 1;
var resultado = 0;

while (contador <= numero2) {
  resultado = resultado + numero1;
  contador++;
}
console.log("Resultado final: " + resultado);