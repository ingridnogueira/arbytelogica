/* Faça um programa que lê o arquivo carro.json utilizano a biblioteca 'fs' para ler o arquivo
e após isso utiliz o métoo JSON.parse para deserializar o objeto em string.
Após isso imprima os valores lidos o json do arquivo.
OBS: altere o arquivo salve e rode o programa novamente e veja se os dados mudam. */

var fs = require("fs");
var puxaJson = fs.readFileSync("data/carro.json");
var carro = JSON.parse(puxaJson);
console.log(`Cor: ${carro.cor}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Marca: ${carro.marca}`);