/*
Fazer um programa que leia um valor de DDI e informe o nome do país Correspondente ao DDI. Por exemplo: 
Se lê 1 imprime "Estados Unidos", 
Se lê 49 imprime "Alemanha",
Se lê 54 imprime "Argentina",
Se lê 55 imprime "Brasil",
Se lê 35 imprime "Portugal". 
Deve também imprimir uma mensagem caso o DDI não esteja cadastrado.
*/

var readlineSync = require('readline-sync')
var ddi = readlineSync.questionFloat("Digite o DDI do Pais: ")

if (ddi == 1) {
    console.log(`DDI ${ddi} dos Estados Unidos`)
} else if (ddi == 49) {
    console.log(`DDI ${ddi} da Alemanha`)
} else if (ddi == 54) {
    console.log(`DDI ${ddi} da Argentina`)
} else if (ddi == 55) {
    console.log(`DDI ${ddi} do Brasil`)
} else if (ddi == 35) {
    console.log(`DDI ${ddi} de Portugal`)
} else {
    console.log("Desculpe, DDI não cadastrado")
}