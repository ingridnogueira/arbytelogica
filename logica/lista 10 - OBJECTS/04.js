/* Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir,
caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para
que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, em vez de
serializar/deserializar o objeto será o array que possui os carros).
Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou
adicionar, caso o usuário escolha exibir deve ser exibido todos os carros cadastrados. */

var rs = require('readline-sync');
var fs = require('fs');
function devolveCarro() {
    var carro = {};
    carro.marca = rs.question('Qual a marca do automovel: ');
    carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
    carro.cor = rs.question('Escoha a cor do seu automovel: ');
    return carro;
}

function abreGaragem(caminhoObj, fs) {
    var objDes = fs.readFileSync(caminhoObj)
    var garagem = JSON.parse(objDes)
    return garagem
}

function fechaGaragem(garagem, caminhoDoArquivo, fs) {
    var garagemjson = JSON.stringify(garagem);
    fs.writeFileSync(caminhoDoArquivo, garagemjson);
}
var caminhoJson = "data/carro.json"
var garagem = abreGaragem(caminhoJson, fs);

while (true) {
    var resp = rs.keyInYN('Voce deseja adicionar outro carro?: ')
    if (resp == true) {
        var carroNovo = devolveCarro()
        garagem.push(carroNovo)
        fechaGaragem(garagem, caminhoJson, fs)
    } else {
        for (var i = 0; i < garagem.length; i++) {
        console.log("Seu automovel é um", garagem[i].marca, "de modelo", garagem[i].modelo, "de cor", garagem[i].cor);
        }
        break
    }
}