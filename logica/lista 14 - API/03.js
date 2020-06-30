/* ​Faça um algoritmo que receba um número de um episódio de
Breaking Bad.
Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
temporada é este episódio. 
Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
Utilize a api : ​https://www.breakingbadapi.com/api/episodes/​{NUMERO_DO_EPISODIO}
Exemplo episodio 10 : ​https://www.breakingbadapi.com/api/episodes/10 */


const axios = require("axios");
const rs = require("readline-sync");

var episodio = rs.question("Insira o numero do EP: ");
var url = "https://www.breakingbadapi.com/api/episodes/" + episodio;

axios.get(url).then((retorno) => {
  var api = retorno.data;

  for (const titulo of api) {
    let resultado = titulo.title;
    console.log(` Título: ${resultado}`);
  }
  for (const temporada of api) {
    let resultado = temporada.season;
    console.log(` Temporada: ${resultado}`);
  }
  for (const episodio of api) {
    let resultado = episodio.episode_id;
    console.log(` Episódio: ${resultado}`);
  }
  for (const elenco of api) {
    let resultado = elenco.characters;
    console.log(` Elenco: ${resultado}`);
  }
});