/* Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
“Ford” na propriedade Car para realizar a contagem. */

var fs = require("fs");
var rs = require("readline-sync");
var caminhoObj = "nova_data/cars.json";
var objetoDeserializado = fs.readFileSync(caminhoObj);
var carros = JSON.parse(objetoDeserializado);

var carrosFiltrados = carros.filter((carro) => carro.Car.includes("Ford"));

console.log(carrosFiltrados.length);