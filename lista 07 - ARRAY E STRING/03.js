/* (LEFT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A colocou diferente do B.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
4,5 */


var  rs  =  require ( "readline-sync" );
var  numA = [ ];
var  numB = [ ];
var  novoArray = [ ];
var  nameA = rs . pergunta ( "Digite seu nome, jogador A." );
resultado  var = 0
para ( var  i =  0 ;  i < 3 ;  i ++ ) {
    numA . push ( rs . questionFloat ( "Nota:" ) )
}
var  nameB = rs . pergunta ( "Digite seu nome, jogador B." )
para ( var  i =  0 ;  i < 3 ;  i ++ ) {
    numB . push ( rs . questionFloat ( "Nota:" ) ) }}
para ( contagem de var  = 0 ; contagem < 3 ; contagem ++ ) { 
    resultado  =  numB . inclui ( numA [ contagem ] )
       if ( result ! == true ) {
           novoArray . push ( numA [ contagem ] )
    }
}
console . log ( `Os números digitados por $ { nameA } são: $ { numA } ` );
console . log ( `Os números digitados por $ { nameB } são: $ { numB } ` );
console . log ( `Os números que $ { nameA } digitam diferentes de $ { nameB } são: $ { novoArray } ` );