/*Faça um algoritmo que imprima uma frase aleatória 
de Breaking Bad etambém seu autorUtilize a API : ​https://breaking-bad-quotes.herokuapp.com/v1/quotes*/

const axios = require("axios");

axios
  .get(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`)
  .then((resposta) => {
    var frase = resposta.data[0].quote;
    var autor = resposta.data[0].author;
    console.log(`Frase: ${frase} Autor: ${autor}`);
  })

  .catch(function (error) {
    console.log(error);
  });