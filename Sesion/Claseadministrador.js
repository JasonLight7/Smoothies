
        class _Administrador  {
            constructor(

         NOMBRE,
         EMAIL,
         CLAVE,
         IMAGEN,
         ESTADO
                     ) {

                         this.NOMBRE =NOMBRE;
                         this.EMAIL=EMAIL;
                         this.CLAVE=CLAVE;
                         this.IMAGEN=IMAGEN;
                         this.ESTADO=ESTADO;
                     }
            Guardar() {     //ESTA FUNCION TOMA LO QUE SE ENVIA DEL MENSAJE ENVIADO, Y SE VA A LA URL DONDE SE GUARDA EL NUEVO LOGIN//
                var objetoaenviar = this;
                // Return a new promise.
                return new Promise(function(resolve, reject) {
                    // Do the usual XHR stuff

                    try {

                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', 'http://localhost:8080/api/nuevoadministrador');
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
                        xhr.open('POST', 'http://localhost:8080/api/Modificaradministrador');
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
                        xhr.open('POST', 'http://localhost:8080/api/eliminaradministrador');
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
                        xhr.open('POST', 'http://localhost:8080/api/seleccionaradministrador');
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

  Login(req,res) {
            var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
          // Do the usual XHR stuff

            try {

                     var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Loginadmi');
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
 }
