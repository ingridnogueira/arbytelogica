/* Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc */

var fasamImc = require("fasam-imc-calc");
var rs = require("readline-sync");

var peso = rs.questionInt("Insira o seu peso: ");
var altura = rs.questionFloat("Insira sua altura: ");

var imc = new fasamImc(peso, altura);

console.log(imc.calc());
