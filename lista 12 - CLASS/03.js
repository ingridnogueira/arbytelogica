/* Criar um módulo que calcule a média de uma coleção de números.
Para isso crie um arquivo chamado calcula-media.js.
No módulo exporte uma função media(arr) que recebe como argumento um array de
números.
A função deve iterar por esses números e retornar sua média.
Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
números, utilize o módulo criado para calcular a média e no final imprima o resultado
para o usuário. */

var rs = require("readline-sync");

class CalculaMedia {
  constructor() {}
  calcMedia(numero1, numero2, numero3) {
    var soma = numero1 + numero2 + numero3;
    var resultado = soma / 3;
    console.log(`A média dos 3 números é ${resultado}`);
  }
}

var numero1 = rs.questionInt("Insira o primeiro numero: ");
var numero2 = rs.questionInt("Insira o segundo numero: ");
var numero3 = rs.questionInt("Insira o terceiro numero: ");

var calcMedia = new CalculaMedia();
var total = calcMedia.calcMedia(numero1, numero2, numero3);