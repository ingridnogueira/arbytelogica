//Confere uma senha

var readline = require("readline-sync");

var resposta = readline.question("Digite a senha: ");

if (resposta == 1234) {
  console.log("Acesso Permitido");
} else {
  console.log("Acesso Negado");
}
