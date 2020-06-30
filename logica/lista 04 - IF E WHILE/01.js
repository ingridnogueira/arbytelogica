/*Escreva um programa que pedirá para o usuário dois números entre 1e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário.
 Entretanto, caso o número seja divisível por 7,o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisívelpor 5, o programa deve imprimir “Pong”. 
 Caso o número seja divisível por 7 e 5, oprograma deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvezprecisem fazer uso do recurso “user.questionInt()” 
 que transforma o conteúdo de uminput do usuário de string para inteiro*/

var rs = require("readline-sync");
var num1 = rs.questionInt("Digite o primeiro numero de 1 a 100: ");
var num2 = rs.questionInt("Digite o segundo numero de 1 a 100: ");

if (num1 < num2) {
  while (num1 <= num2) {
    if (num1 % 5 == 0 && num1 % 7 == 0) {
      console.log("ping pong");
    } else if (num1 % 7 == 0) {
      console.log("ping");
    } else if (num1 % 5 == 0) {
      console.log("Pong");
    } else {
      console.log(num1);
    }
    num1++;
  }
} else if (num2 < num1) {
  while (num2 <= num1) {
    if (num2 % 5 == 0 && num2 % 7 == 0) {
      console.log("ping pong");
    } else if (num2 % 7 == 0) {
      console.log("ping");
    } else if (num2 % 5 == 0) {
      console.log("Pong");
    } else {
      console.log(num2);
    }
    num2++;
  }
}