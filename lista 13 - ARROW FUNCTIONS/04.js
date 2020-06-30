/* Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
europa e depois disso aplicar a média em cima do campo Horsepower. */

var fs = require("fs");
var json = fs.readFileSync("./objetos/cars.json");
var cars = JSON.parse(json);

var OrigemCarro = cars.filter((carro) => carro.Origin == "Europe");

console.log(OrigemCarro.length);

var soma = 0;
var cont = 0;

for (cont = 0; cont < OrigemCarro.length; cont++) {
  var soma = soma + OrigemCarro[cont].Horsepower;
}

console.log(soma);

var result = (() => soma / OrigemCarro.length)();

console.log(result.toFixed(1));