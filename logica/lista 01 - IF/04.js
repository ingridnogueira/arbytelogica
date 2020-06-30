var user = require('readline-sync')
var fruta = user.question('Digite a quantidade de macas compradas ')

if (fruta <=12){
    fruta = fruta*0.30
    console.log('Voce gastou: R$' + fruta.toFixed(2))
} else {
    fruta = fruta*0.25
    console.log('Voce gastou: R$' + fruta.toFixed(2))
}