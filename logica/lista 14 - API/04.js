/* Faça um algoritmo que receba uma CEP e diga qual é o endereço
completo (Cidade, rua, estado) deste CEP.
Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
Exemplo CEP :https://api.postmon.com.br/v1/cep/8901002*/

const axios = require("axios");
const rs = require("readline-sync");

var cep = rs.question("Digite seu CEP: ");

var api = axios
  .get(`https://api.postmon.com.br/v1/cep/${cep}`)
  .then((cep) => {
    var cepCompleto = cep.data;
    var rua = cepCompleto.logradouro;
    var bairro = cepCompleto.bairro;
    var cidade = cepCompleto.cidade;
    var estado = cepCompleto.estado;

    console.log(`Endereço completo: ${rua}, ${bairro}, ${cidade}, ${estado} `);
  })
  .catch((error) => {
    console.log("Endereço não encontrado");
  });