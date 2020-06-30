
//Programa para ler ano de nascimento e se pessoa pode votar.

var anoDeNascimento, ano 

var rs = require("readline-sync")

var anoDeNascimento = rs.question ("Insira o ano de nascimento: ")
var ano = rs.question ("Insira o ano atual: ")

if(ano - anoDeNascimento < 16 ){
    console.log("Nao pode votar")

} else {
    console.log("Já pode votar");
}