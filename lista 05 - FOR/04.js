/* Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7 */


var rs = require("readline-sync");
var aluno = [];
var nota = [];
for (var i = 0; i < 5; i++) {
  var nome = rs.question("Diga o nome de um aluno:  ");
  var nota1 = rs.questionFloat("Diga a primeira nota:  ");
  var nota2 = rs.questionFloat("Diga a segunda nota nota:  ");
  nota1 = nota1 * 0.3;
  nota2 = nota2 * 0.7;
  var media = nota1 + nota2;
  var adcionar = aluno.push(nome);
  var adcionar = nota.push(media);
 

}
for (var i = 0; i < aluno.length; i++) {
  console.log("o Aluno ", aluno[i] + " tem a media: " + nota[i].toFixed(1));
}
