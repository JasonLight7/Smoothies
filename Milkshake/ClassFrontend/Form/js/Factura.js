
    function mostrarfactura() {
    var plata= document.getElementById('muestrafactura');
    let cantidad = document.getElementById("kolas5").innerHTML;
    let display= " ";
		let mensajeBatido = new Array();
		mensajeBatido[0]="Precio: 1500";
		mensajeBatido[1]="Precio: 1000";
		mensajeBatido[2]="Precio: 2500";
		mensajeBatido[3]="Precio: 1800";
		mensajeBatido[4]="Precio: 3500";
		mensajeBatido[5]="Precio: 4500";

		let factura= new Array();
		factura[0]=1500;
		factura[1]=1000;
		factura[2]=2500;
		factura[3]=1800;
		factura[4]=3500;
		factura[5]=4500;
		for(var i=0; i<factura.lenght; i++){
			if(cantidad == mensajeBatido[0]){
				 display += "<br>Total a pagar: " + factura[0];
			}
		}
    
			plata.innerHTML= display;

	}
