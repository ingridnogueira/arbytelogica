/* Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar. */

var user = require('readline-sync')
var numero = user.questionInt(`Digite um numero: `)

var numeroDiviido = (numero % 2)

if(numeroDiviido === 0){
    console.log(`O numero ${numero} é par.`)
}else{
    console.log(`O numero ${numero} é ímpar.`)
}