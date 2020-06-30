/* Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
transforme ela em maiúscula
EX: abelha
O algoritmo imprime
AbelhA */


var rs = require("readline-sync");
var option = "";
var option = rs.question("Qual a palavra?");
var palavra = option.split("");
for (let i = 0; i < option.length; i++) {
  if (option[i] === "a") {
    palavra[i] = option.charAt(i).toUpperCase();
  }
}
console.log(palavra.join(""));