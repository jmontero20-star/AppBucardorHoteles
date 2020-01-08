
//Cabeceras
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://admin:JulianMongo@monterodb-p6kpv.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "Alojamientos";
 
//Express
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Conectando BD
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("hoteles");
        console.log("Conectado a " + DATABASE_NAME + "!!!!!");
    });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);


//Métodos

//GET
app.get("/ListarHoteles",(request,response) => {
    collection.find({}).toArray(
         (error,result)=>{
             if(error){
                 return response.status(500).send(error);
             }
         response.send({ 'hoteles': result});
         
     });
});


//GET/Id
app.get("/BuscarHotel/:id",(request,response) => {
    
    collection.findOne({"_id": new ObjectId(request.params.id)},(error, result)=>{
        if(error){
            return response.status(500).send(error);
        }
        response.send({ 'hoteles': result});
    });
});


//POST
app.post("/agregarHotel", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});


//GET/Nombre
app.get("/BuscarHotelNombre/:nombre",(request,response) => {
    var nn = request.params.nombre;
    var query = { nombre: new RegExp(nn, 'i')}
    console.log('nombre: ' + nn);
    collection.find(query).toArray(
        (error,result)=>{
            if(error){
                return response.status(500).send(error);
            }
        response.send({ 'hoteles': result});
        
    });
});
