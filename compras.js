//compras//
var mongoose= require('mongoose'); //Llama al modelo//
var Schema= mongoose.Schema; //Funcion que se utiliza con el uso de mongoose//
var compras= new Schema({
	//Con el string se utiliza los textos//
	//Con el number se utiliza los numeros//
	//Con el date se utiliza las fechas//
 NOMBRE: String,
	TAMANO: String,
	LIQUIDO: String,
	CANTIDAD: String,
	DOPPINGS: String,
	PRECIO: String,





});
module.exports=mongoose.model('compras', compras);
