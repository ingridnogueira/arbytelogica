/* Escreva um algoritmo que imprima todos os números ímpares de 1 até 100. */

var user = require('readline-sync');
var repete = 100;
while (repete >= 0) {
    if (repete % 2 != 0) {
        console.log(repete)
            --repete;
    } else {
        --repete;
    }
}