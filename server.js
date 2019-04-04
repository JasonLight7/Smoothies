//Inicializacion
var express= require('express');
var app= express();                    // Utilizamos exress
var mongoose= require('mongoose');		// mongoose para mongodb
var port= process.env.PORT || 8080;         // Tomamos el puerto 8080

mongoose.connect('mongodb://localhost:27017/Milkshake');  // Hacemos la conexion

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connetion error:'));
app.configure(function(){
app.use(express.static(__dirname + '/'));
app.use(express.logger('dev'));

app.use(express.methodOverride());


});
var bodyParser=require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
require('./routes.js')(app);
app.listen(port);
console.log("APP por el puerto " + port);
console.log("mongodb://localhost:27017/Milkshake");
//Poner ; en numeros de calculadora controller//
