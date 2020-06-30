/*Criar uma função que receba uma coleção de alunos e calcule a média de idade
Adicione uma nova função no arquivo calcula-media.js chamada
calculaMediaIdadeAluno(alunos).
A função deve receber um array da mesma classe dos alunos criada na atividade 2.
Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.
Adicione essa função para ser exportado pelo módulo.
Adicione no final do programa da atividade 2 após informar o nome dos alunos com
maior idade também imprimir a média de idade dos alunos utilizando o método
calculaMediaIdadeAluno(alunos)*/

var calculaMediaIdade = require("./js-pack/calcula-media");
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
    (this.nome = rs.question("Insira o nome do aluno: ")),
    (this.idade = rs.questionInt("Insira a idade do aluno: "))
  );
  return primeiroAluno;
}

while (true) {
  maiorIdade.push(cadastrarAluno());
  var novo = rs.keyInYN("Deseja cadastrar um novo aluno? :");
  if (novo == false) {
    break;
  }
}

var maiorIdadeEntreTodos = 0;
for (var i = 0; i < maiorIdade.length; i++) {
  var idadeAtual = maiorIdade[i].idade;
  if (idadeAtual > maiorIdadeEntreTodos) {
    maiorIdadeEntreTodos = idadeAtual;
  }
}

for (var i = 0; i < maiorIdade.length; i++) {
  if (maiorIdadeEntreTodos == maiorIdade[i].idade) {
    console.log("o aluno de maior idade é: ", maiorIdade[i]);
  }
}

console.log(`A média de idades é ${calculaMediaIdade(maiorIdade)}`);