var controllercompras = require('./controllercompras.js');
var controllerbatidos = require('./controllerbatidos.js');
var controlleradministrador = require('./controlleradministrador.js');


//Libreria donde se encuentra las funciones disponible con los url A...//

module.exports= function(app){

//La funcion app es express en el servidor
	var clasebatidos= new controllerbatidos();
		var clasecompras= new controllercompras();
    var claseadministrador = new controlleradministrador();
    app.post('/api/nuevoadministrador', claseadministrador.Guardar);
    app.post('/api/loginadmi', claseadministrador.Login);
		app.post('/api/nuevabatidos', clasebatidos.Guardar);
	app.post('/api/modificabatidos', clasebatidos.Modificar);
	app.post('/api/eliminabatidos', clasebatidos.Eliminar);
	app.post('/api/seleccionartodos', clasebatidos.Seleccionartodos);
	app.post('/api/seleccionarporfecha', clasebatidos.Seleccionarporfecha);
	app.post('/api/seleccionarporid', clasebatidos.Seleccionarporid);
	app.post('/api/seleccionarpornombre', clasebatidos.Seleccionarpornombre);
	app.post('/api/nuevacompras', clasecompras.Guardar);
app.post('/api/modificacompras', clasecompras.Modificar);
app.post('/api/eliminacompras', clasecompras.Eliminar);
app.post('/api/seleccionartodos', clasecompras.Seleccionartodos);
app.post('/api/seleccionarporfecha', clasecompras.Seleccionarporfecha);
app.post('/api/seleccionarporid', clasecompras.Seleccionarporid);
app.post('/api/seleccionarpornombre', clasecompras.Seleccionarpornombre);
app.post('/api/nuevacompras', clasecompras.Guardar);


    //La funcion app es express en el servidor//


app.get('*', function(req,res){ //localhost:8080 el signo * toma todo lo que no existe en el localhost
res.sendfile('./login.html'); // Carga unica de la visita

});


};
