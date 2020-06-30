// Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000.

var soma = 0

for(i = 0; i <= 100; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log(i +' é multplo dos de 3 e 5');
        soma = soma + i;
}
console.log(soma);