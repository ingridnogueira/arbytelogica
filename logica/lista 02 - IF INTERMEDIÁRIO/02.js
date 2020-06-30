/*
Faça um programa onde o usuário irá escolhe se que Converte graus Celsius para Fahrenheit ou Fahrenheit
para Celsius. 
*/

var readlineSync = require("readline-sync");
var pergunta1 = readlineSync.questionFloat(
  "Digite 1 - Celsius para Fahrenheit ou 2 - Fahrenheit para Celsius: "
);

if (pergunta1 == 1) {
  var celFah = readlineSync.questionFloat("Digite quantos graus Celsius: ");
  var conversao1 = (celFah * 9) / 5 + 32;
  console.log(
    `${celFah} graus Celsius eh igual a ${conversao1} graus Fahrenheit.`
  );
} else {
  var fahCel = readlineSync.questionFloat("Digite quantos graus Fahrenheit: ");
  var conversao2 = ((fahCel - 32) * 5) / 9;
  console.log(
    `${fahCel} graus Fahrenheit eh igual a ${conversao2} graus Celsius.`
  );
}