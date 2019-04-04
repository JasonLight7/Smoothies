
        class _compras {
   constructor(_id,
   NOMBRE,
   TAMANO,
   LIQUIDO,
   CANTIDAD,
   DOPPINGS,
   PRECIO,

            ) {
       this._id=_id;
    this.NOMBRE=NOMBRE;
    this.TAMANO=TAMANO;
    this.LIQUIDO=LIQUIDO;
    this.CANTIDAD=CANTIDAD;
    this.DOPPINGS=DOPPINGS;
    this.PRECIO=PRECIO;


   }
Guardar() {     //ESTA FUNCION TOMA LO QUE SE ENVIA DEL MENSAJE ENVIADO, Y SE VA A LA URL DONDE SE GUARDA LA NUEVA compras//
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/nuevacompras');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });
}

 Modificar() {

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Modificacompras');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


}

    Eliminar() { //Agarra lo que se envia pero luego agarra un id que luego envia a la url node se elimina la informacion//

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Eliminacompras');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


}
Seleccionartodos() {   //Muestra todo lo que existe en la base de datos//

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff


      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


}

    Seleccionarporfecha() { //Busca en la base de datos segun la fecha que el usuario digite//

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporfecha');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


}

    Seleccionarporid(req,res) {  //Se busca informacion en el localhost que tenga relacion con el id el usuario digite//

      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });

}

    Seleccionarpornombre(req,res) { //Busca en la base de datos segun el nombre que el usuario digite//



      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });

}
             comprasspormesyanno(mes,anno)
            {

       var objetoaenviar = this;
                var vectordecomprassfiltradas = [];
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var comprass =JSON.parse(xhr.responseText);


        for(var elemento in comprass)
            {
                var fechadelacompras = new Date(comprass[elemento].FECHA);
                if((fechadelacompras.getMonth()+1 == mes) && (fechadelacompras.getFullYear() == anno))
                    {
                        vectordecomprassfiltradas.push(comprass[elemento]);
                    }

            }

         resolve(vectordecomprassfiltradas);

    }
    else
        {
           reject(xhr);
        }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
     reject(err.message);

}
    });


            }

}
