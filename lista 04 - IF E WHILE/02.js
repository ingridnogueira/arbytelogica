/ * Escreva um programa que passe por todos os números de 1 a 50 e
para cada um deles imprime na tela se o número é par ou ímpar. Caso o número
também seja primo, ou o programa deve dizer o que é primo. (um número primo é um
número que é divisível por ele e por 1). Dica: Neste exercício você pode
precisar de ajuda do operador MÓDULO (%). Você também pode criar mais de
hum loop. * /

seja  n1  =  1 ;
seja  n2  =  50 ;

while  ( n1 <= n2 )  {
    deixe  ehPrimo  =  true ;
    deixar  divisor  =  2 ;

    while  ( divisor  <  n1 )  {
        if  ( n1 % divisor  ==  0 )  {
            // não é primo
            ehPrimo  =  false ;
        }
        divisor ++
    }

    if  ( n1 % 2  ==  0 )
    se  ( ehPrimo )  consola . log ( n1  +  'é primo' )
    se  ( n1 % 2  ==  0 )  console . log ( n1  +  'é par' ) ;
    outro  console . log ( n1  +  'é impar' ) ;

    n1 ++
}