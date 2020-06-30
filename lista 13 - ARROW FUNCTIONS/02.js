/* Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
cars.json
O campo que define o país no cars.json é Origin
A comparação da string pode ser utilizada usando a palavra “Japan”

var rs = require ("readline-sync") */

var fs = require("fs");

var carroSerializados = fs.readFileSync("cars.json");
var cars = JSON.parse(carroSerializados);

var carrosjaponeses = "Japan";

var japoneses = cars.filter((carro) => carro.Origin == carrosjaponeses);

console.log(japoneses.length);
