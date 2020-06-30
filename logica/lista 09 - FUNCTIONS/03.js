/* Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
essa idade expressa em dias.
Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
utilizando a função criada. */


var rs = require("readline-sync");

function retornaDiasvividos(anos) {
  console.log(anos);
  var totaldias = anos[0] * 365 + anos[1] * 30 + anos[2] * 1;
  return `Voce esta vivo a ${totaldias} dias`;
}

var entrada = rs
  .question("Digite anos meses e dias separados por espaço: ")
  .split(" ");

console.log(retornaDiasvividos(entrada));
