/* Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
volume (v = 4/3.pi.R^3).
Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado. */

var rs = require("readline-sync");
var valorRaio = rs.questionFloat("Digite o valor do raio de uma esfera: ");

function calculaVolume(raio) {
  return ((4 / 3) * 3.14 * raio ** 3) / 3;
}
console.log(calculaVolume(valorRaio));
