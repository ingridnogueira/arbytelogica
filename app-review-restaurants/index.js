const mongoose = require("mongoose"); //chamei a biblioteca

mongoose.connect("mongodb://127.0.0.1:27017/restaurantes",  //conectei ao banco de dados
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection; //guardei a conexão em uma constante

db.on("error", (error) => console.log(error)); //trata erro
db.once("open", function(){ // trata acerto
console.log("Conectado ao banco de dados");
})

////////////////////////////////////////////////////////////////

const restaurantSchema = new mongoose.Schema ( {

    name: String,
    cuisine: String,
    restaurant_id: Number
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

/////////////////////////////////////////////////////////////////

const serrachina = new Restaurant({
    name: "Serra China",
    cuisine:"Sushi",
    restaurant_id: 1
})

const salve = serrachina.save()
.then((salve) => console.log(salve))
.catch()