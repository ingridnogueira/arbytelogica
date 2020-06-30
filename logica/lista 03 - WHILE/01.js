/* Faça um programa que recebe um número de entrada e repita a mensaem "BIP BIP"
de acordo com o número inserido. Ex: usuário imprimiu 3
O programa imprime:
BIP BIP
BIP BIP
BIP BIP */

var user = require("readline-sync");
var numeroBip = user.question("Digite um numero: ");
var contador = 0;

while (contador < numeroBip) {
  console.log(`BIP BIP`);
  contador = contador + 1;
}
