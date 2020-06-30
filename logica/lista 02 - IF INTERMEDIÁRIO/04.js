var rs = require("readline-sync");

while (true) {
  var salario = rs.question("Qual o valor do seu Salario Atual: ");
  var emprestimo = rs.questionFloat(
    "Qual o valor do Emprestimo que vc Precisa: "
  );
  var nparcelas = rs.questionFloat(
    "Qual o numero de parcelas para o emprestimo: "
  );
  var valorparcelas = emprestimo / nparcelas;

  if (salario <= 0 || emprestimo <= 0 || nparcelas <= 0) {
    console.log("Você Digitou um valor Invalido");
  } else {
    break;
  }
}

if (valorparcelas <= salario * 0.3) {
  console.log("Você pode fazer este emprestimo");
} else {
  console.log("Você não pode fazer este emprestimo");
}
