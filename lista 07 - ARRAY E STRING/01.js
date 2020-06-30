/* Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco,
se o valor for menor informar que a compra vai ser cancelada.
EX entradas :
0.75
0.25
2.50
Valor total pago: 5.00
O programa imprime :
Produto 1 - 0.75
Produto 2 - 0.25
Produtos 3 - 2.50
Total da compra : 3.50 $
Troco : 1.50 $
 */

var rs = require("readline-sync");

var produto = [];

var total = 0;

while (true) {
  var pricing = rs.questionFloat("Insira o valor do produto: ");
  total = total + pricing;
  produto.push(pricing);

  var resp = rs.questionInt(
    "Digite 1 para cadastrar outro produto ou 0 par sair: "
  );
  if (resp == 1) {
    continue;
  } else {
    break;
  }
}

for (var i = 0; i < produto.length; i++) {
  var cont = i + 1;
  console.log(`Produto ${cont} = ${produto[i]}`);
}

console.log(`Total de compra ${total} reais`);

var pagamento = rs.questionFloat("Total pago: ");

var troco = pagamento - total;

console.log(`Total de troco ${troco}`);