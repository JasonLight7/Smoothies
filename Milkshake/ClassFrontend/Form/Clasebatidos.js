
        class _batidos {
   constructor(_id,
    NOMBRE,
    TAMANO,
    LIQUIDO,
    SOLIDO,
    CANTIDAD,
    IMAGEN,
    COMBINACION,
    SABORES,
    SABORESS,
    SABORESSS,

            ) {
       this._id=_id;
    this.NOMBRE =NOMBRE;
    this.TAMANO=TAMANO;
    this.LIQUIDO=LIQUIDO;
    this.SOLIDO=SOLIDO;
    this.CANTIDAD=CANTIDAD;
    this.IMAGEN=IMAGEN;
    this.COMBINACION=COMBINACION;
    this.SABORES=SABORES;
    this.SABORESS=SABORESS;
    this.SABORESSS=SABORESSS;


   }
Guardar() {     //ESTA FUNCION TOMA LO QUE SE ENVIA DEL MENSAJE ENVIADO, Y SE VA A LA URL DONDE SE GUARDA LA NUEVA batidos//
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/nuevabatidos');
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
xhr.open('POST', 'http://localhost:8080/api/Modificabatidos');
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
xhr.open('POST', 'http://localhost:8080/api/Eliminabatidos');
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
             batidosspormesyanno(mes,anno)
            {

       var objetoaenviar = this;
                var vectordebatidossfiltradas = [];
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff

      try {

               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var batidoss =JSON.parse(xhr.responseText);


        for(var elemento in batidoss)
            {
                var fechadelabatidos = new Date(batidoss[elemento].FECHA);
                if((fechadelabatidos.getMonth()+1 == mes) && (fechadelabatidos.getFullYear() == anno))
                    {
                        vectordebatidossfiltradas.push(batidoss[elemento]);
                    }

            }

         resolve(vectordebatidossfiltradas);

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
