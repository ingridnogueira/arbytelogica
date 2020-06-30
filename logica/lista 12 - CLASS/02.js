/* Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
um possuir maior idade apresentar o nome de todos os que possuem maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
e inicialize essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos.
Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
com maior idade e imprimir seus nomes */


var rs = require("readline-sync");
var maiorIdade = [];
class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}
function cadastrarAluno() {
  var primeiroAluno = new Aluno(
    (this.nome = rs.question("Insira o nome do aluno")),
    (this.idade = rs.question("Insira a idade do aluno"))
  );
  return primeiroAluno;
}
for (var i = 0; i < 3; i++) {
  maiorIdade.push(cadastrarAluno());
}

var maiorIdadeEntreTodos = 0;
for (var i = 0; i < maiorIdade.length; i++) {
  var idadeAtual = maiorIdade[i].idade;
  if (idadeAtual > maiorIdadeEntreTodos) {
    maiorIdadeEntreTodos = idadeAtual;
  }
}
// console.log(maiorIdadeEntreTodos)
for (var i = 0; i < maiorIdade.length; i++) {
  if (maiorIdadeEntreTodos == maiorIdade[i].idade) {
    console.log("o aluno de maior idade é", maiorIdade[i]);
  }
}