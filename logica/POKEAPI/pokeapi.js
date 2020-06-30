
const axios = require("axios"); //chama biblioteca do axios para trabalhar com APIs pelo node;
const rs = require("readline-sync"); //chama a biblioteca readline-sync para receber um input do usuário;
const fs = require("file-system"); //chama a biblioteca file-system para salvar o arquivo JSON;

const pokedex = []; /* array que irá receber o nome, tipo e as habilidades do pokemon, que o usuário quiser,
 para salvar aqui dentro; */

const nome = rs.question("Qual o pokemon? ").toLowerCase(); //input do usuário com o nome ou número do pokemon;


axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`).then((resposta) => { /* utiliza a biblioteca axios 
fazendo uma requisição HTTP get (exitem outros métodos como: post, delete, head, put, patch) para ter uma resposta da api  */
// O then é o retorno de uma promise. Se funcionar, ele vai executar o que está dentro dele.

    const dadosDoPokemon = nomeDoPokemon(resposta); // Chamar função nome do pokemon

    tipoDoPokemon(dadosDoPokemon); // Chamar função tipo do pokemon

    habilidadeDoPokemon(dadosDoPokemon); // Chamar função habilidades do pokemon

    salvarArquivoOuNao(); // Chamar função para salvar o arquivo
})


function nomeDoPokemon(resposta) {   /* função que vai buscar em "resposta" (que é todas as informações da API)
    o nome do pokemon de acordo com o input do usuário  */
    const dadosDoPokemon = resposta.data;  /* constant que vai pegar as informações da API e filtrar
     para acessar apenas os dados */
    const nomeDoPokemon = dadosDoPokemon.forms[0].name; /* Constant que vai pegar a contante anterior 
    e caminhar até o ídice e objeto que está o nome do pokemon que o usuário quer buscar */
    pokedex.push(nomeDoPokemon); /* A função push irá levar o nome do pokemon para a array pokedex */
    console.log(` O nome do pokemon é ${nomeDoPokemon}`); /* console.log vai imprimir o nome do pokemon 
    para o usuário */
    return dadosDoPokemon; /* o return retornará os dados do pokemon para serem utilizados dentro das 
    duas funções a seguir (tipoDoPokemon e habilidadeDoPokemon) */
}

function tipoDoPokemon(dadosDoPokemon) {  /* A função irá pegar os dados da API(no parâmetro)  do pokemon para
     encontrar o tipo do pokemon buscado*/
    let nomeDosTipos = []; 
    dadosDoPokemon.types.forEach((dadosDoPokemon) => nomeDosTipos.push(dadosDoPokemon.type.name)); /* Utiliza os 
    dados Do Pokemon por meio da constant e acessa todos os tipos. Então, faz um forEach para procurar, entre os
    tipos, aquele que o usuário quer, que corresponde ao pokemon que ele buscou. Depois, passa a constant 
    dadosDoPokemon como parâmetro numa arrow function anônima, dentro do forEach, e joga (push) o nome do 
    tipo dentro da array vazia criada, nomeDosTipos,  acessado pelo caminho 
    (dadosDoPokemon.type.name)*/
    pokedex.push(nomeDosTipos); /* joga na array "pokedex", o que está dentro da array "nomeDosTipos" */
    console.log(`O tipo do pokemon é ${nomeDosTipos}`); /* Imprime o tipo do pokemon para o usuário */
}


function habilidadeDoPokemon(dadosDoPokemon) { /* A função irá pegar os dados da API(no parâmetro) do pokemon
     para encontrar a habilidade do pokemon buscado*/
    let nomeDahabilidade = [];
    dadosDoPokemon.abilities.forEach((dadosDoPokemon) => nomeDahabilidade.push(dadosDoPokemon.ability.name));
    /* Utiliza os dados Do Pokemon por meio da constant e acessa todos as habilidades. Então, faz um forEach para
    procurar, entre as habilidades, aquele que o usuário quer, que corresponde ao pokemon que ele buscou. Depois,
    passa a constant dadosDoPokemon como parâmetro numa arrow function anônima, dentro do forEach, e joga (push) 
    o nome da habilidade dentro da array vazia criada, nomeDa Habilidade, acessado pelo caminho 
    (dadosDoPokemon.type.name)*/
    pokedex.push(nomeDahabilidade); /* joga na array "pokedex", o que está dentro da array "nomeDaHabilidade" */
    console.log(`A habilidade do pokemon é ${nomeDahabilidade}`); /* Imprime a habilidade do pokemon para o usuário */
}


function salvarArquivoOuNao () { /* Função para saber se o usuário quer salvar a busca e, então, salvar, se a 
    resposta for sim(Y) */

 const respostaParaSalvar = rs.keyInYN("Quer salvar sua pokedex? "); /* função para guardar dentro de uma 
 constant a resposta do usuário */
if (respostaParaSalvar == true) { /* condição para executar o "salvamento" ou não */
   
    let pokemonSerializado = JSON.stringify(pokedex) /* Guardar dentro da const "pokemonSerializado" 
    as informações transformadas em JSON que estão dentro da array "pokedex" */
    fs.writeFile("./pokedex.json", pokemonSerializado, function (error) { /* Utiliza a biblioteca file-system, 
        com a sua função writeFile(), para dizer onde, oq(pokemonSerializado) e o nome do arquivo que será salvo.
        Também foi adicionada uma função para tratar o error, se houver */
        if (error) {  // condição de que se houver error, imprimí-lo
            console.log(error); // imprimir error
        } else {
            console.log("Seu arquivo foi salvo!"); // se não houver error, executar essa mensagem
        } 
    })
    
}else{
    console.log("Volte sempre!") // se o usuário não quiser salvar o arquivo JSON
}
}



    



