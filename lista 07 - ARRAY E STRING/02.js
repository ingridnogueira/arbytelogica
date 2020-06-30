/*(INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
iguais que o jogador A e B colocaram.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3*/

var rs = require("readline-sync");

var jogador1 = rs.question("Digite o nome do primeiro jogador:  ");
var jogador2 = rs.question("Digite o nome do segundo jogador:  ");
var numeroJogador1 = [];
var numeroJogador2 = [];
var num1 = 0;
var num2 = 0;
for (var i = 0; i < 5; i++) {
  num1 = rs.question("Digite um numero para o jogador 1: ");
  numeroJogador1.push(num1);
}
for (var i = 0; i < 5; i++) {
  num2 = rs.question("Digite um numero para o jogador 2: ");
  numeroJogador2.push(num2);
}
for (var i = 0; i < numeroJogador1.length; i++) {
  if (numeroJogador1[i] == numeroJogador2[i]) {
    var igual = numeroJogador1[i];
    console.log(`os jogadores tiveram os seguintes numeros ${igual} iguais`);
  }
}