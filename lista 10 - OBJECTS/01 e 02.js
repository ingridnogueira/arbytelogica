/* Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
objeto Carro e atribua as entradas do usuário neste objeto.
No final o programa deve imprimir as informações do carro.
Utilize a criação de objetos para resolver este problema

Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro
em formato JSON.
Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
métodos da biblioteca ‘fs’ para salvar o arquivo.
Salve o json como ‘carro.json’ */

var rs = require("readline-sync");
var fs = require("fs");
function devolveCarro() {
  var carro = {};
  carro.marca = rs.question("Qual a marca do automovel: ");
  carro.modelo = rs.question("Escolha o modelo do seu automovel: ");
  carro.cor = rs.question("Escoha a cor do seu automovel: ");
  return carro;
}
var automovel = devolveCarro();
console.log(
  "Seu automovel é um",
  automovel.marca,
  "de modelo",
  automovel.modelo,
  "de cor",
  automovel.cor
);
var automovelEmString = JSON.stringify(automovel);
var caminhoDoArquivo = "./data/carro.json";
fs.writeFileSync(caminhoDoArquivo, automovelEmString);