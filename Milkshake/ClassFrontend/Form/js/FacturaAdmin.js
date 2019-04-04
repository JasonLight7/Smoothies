function verBatis() {
 var padre= document.getElementById("asegurarfactus");
  let economia = " ";
  let display= " ";
  let ac=0;
  let ab=0;
  let ad=0;
  let ak=0;
  let am=0;
  let al=0;
  let ar=0;



  let preciot=  new Array();
  preciot[0]=500;
    preciot[1]=350;
      preciot[2]=200;

  let mensajet= new Array();
  mensajet[0]="Grande";
    mensajet[1]="Mediano";
      mensajet[2]="Pequeño";


      let preciol=  new Array();
      preciol[0]=100;
        preciol[1]=200;


      let mensajel= new Array();
      mensajel[0]="Agua";
        mensajel[1]="Leche";

        let precios=  new Array();
        precios[0]=15;
          precios[1]=20;
            precios[2]=30;
              precios[3]=90;
                precios[4]=25;
                  precios[5]=60;
                    precios[6]=70;
                      precios[7]=40;
                        precios[8]=50;


        let mensajes= new Array();
        mensajes[0]="Banano";
          mensajes[1]="Manzana";
            mensajes[2]="Cerezas";
              mensajes[3]="Moras";
                mensajes[4]="Sandia";
                  mensajes[5]="Miel";
                    mensajes[6]="Pera";
                      mensajes[7]="Granola";
                        mensajes[8]="Yogurt";


let tamanoBatido = document.getElementById("Tamano").value;
if(tamanoBatido == mensajet[0]){
  display += "<br>Tamaño del batido: " + tamanoBatido + "-" + "Precio:" + preciot[0];
  ac+= preciot[0];
}
else if (tamanoBatido == mensajet[1]) {
   display += "<br>Tamaño del batido: " + tamanoBatido + "-" + "Precio:" + preciot[1];
   ac+= preciot[1];
}
else if (tamanoBatido == mensajet[2]) {
   display += "<br>Tamaño del batido: " + tamanoBatido + "-" + "Precio:" + preciot[2];
   ac+= preciot[2];
}
  ac;



 let liquidoBatido = 	 document.getElementById("Liquido").value;
 if(liquidoBatido == mensajel[0]){
   display += "<br>Liquido del batido: " + liquidoBatido + "-" + "Precio:" + preciol[0];
     ab+= preciol[0];
 }
 else if (liquidoBatido == mensajel[1]) {
   display += "<br>Liquido del batido: " + liquidoBatido + "-" + "Precio:" + preciol[1];
     ab+= preciol[1];
}
ab;


let solidoBatido = 	document.getElementById("Solido").value;
if(solidoBatido == mensajes[0]){
  display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[0];
  ad+= precios[0];
}
else if (solidoBatido == mensajes[1]) {
  display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[1];
  ad+= precios[1];
}
else if (solidoBatido == mensajes[2]) {
 display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[2];
 ad+= precios[2];
}
else if (solidoBatido == mensajes[3]) {
display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[3];
ad+= precios[3];
}
else if (solidoBatido == mensajes[4]) {
display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[4];
ad+= precios[4];
}
else if (solidoBatido == mensajes[5]) {
display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[5];
ad+= precios[5];
}
else if (solidoBatido == mensajes[6]) {
display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[6];
ad+= precios[6];
}
else if (solidoBatido == mensajes[7]) {
display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[7];
ad+= precios[7];
}
else if (solidoBatido == mensajes[8]) {
display += "<br>Solido del batido: " + solidoBatido + "-" + "Precio:" + precios[8];
ad+= precios[8];
}
ad;

let cantidadBatido =	document.getElementById("Cantidad").value;
display += "<br>Cantidad del batido: " + cantidadBatido;
ak+= cantidadBatido;

let sabor1 =	 document.getElementById("Sabores").value;
if(sabor1== mensajes[0]){
  display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[0];
  am+= precios[0];
}
else if (sabor1 == mensajes[1]) {
  display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[1];
    am+= precios[1];
}
else if (sabor1== mensajes[2]) {
 display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[2];
   am+= precios[2];
}
else if (sabor1 == mensajes[3]) {
display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[3];
  am+= precios[3];
}
else if (sabor1 == mensajes[4]) {
display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[4];
  am+= precios[4];
}
else if (sabor1 == mensajes[5]) {
display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[5];
  am+= precios[5];
}
else if (sabor1 == mensajes[6]) {
display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[6];
  am+= precios[6];
}
else if (sabor1 == mensajes[7]) {
display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[7];
  am+= precios[7];
}
else if (sabor1 == mensajes[8]) {
display += "<br>Dopping1: " + sabor1 + "-" + "Precio:" + precios[8];
  am+= precios[8];
}
am;



let sabor2 =	 document.getElementById("Saboress").value;
if(sabor2== mensajes[0]){
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[0];
al+= precios[0];
}
else if (sabor2 == mensajes[1]) {
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[1];
al+= precios[1];
}
else if (sabor2== mensajes[2]) {
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[2];
al+= precios[2];
}
else if (sabor2 == mensajes[3]) {
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[3];
al+= precios[3];
		}
else if (sabor2 == mensajes[4]) {
	display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[4];
 al+= precios[4];
	}
else if (sabor2 == mensajes[5]) {
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[5];
  al+= precios[5];
	}
	else if (sabor2 == mensajes[6]) {
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[6];
al+= precios[6];
}
else if (sabor2 == mensajes[7]) {
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[7];
al+= precios[7];
}
else if (sabor2 == mensajes[8]) {
display += "<br>Dopping2: " + sabor2 + "-" + "Precio:" + precios[8];
al+= precios[8];
}
al;


let sabor3 =		document.getElementById("Saboresss").value;
if(sabor1== mensajes[0]){
  display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[0];
  ar+= precios[0];
}
else if (sabor3 == mensajes[1]) {
  display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[1];
    ar+= precios[1];
}
else if (sabor3== mensajes[2]) {
 display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[2];
   ar+= precios[2];
}
else if (sabor3 == mensajes[3]) {
display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[3];
  ar+= precios[3];
}
else if (sabor3 == mensajes[4]) {
display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[4];
  ar+= precios[4];
}
else if (sabor3 == mensajes[5]) {
display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[5];
  ar+= precios[5];
}
else if (sabor3== mensajes[6]) {
display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[6];
  ar+= precios[6];
}
else if (sabor3== mensajes[7]) {
display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[7];
  ar+= precios[7];
}
else if (sabor3 == mensajes[8]) {
display += "<br>Dopping3: " + sabor3 + "-" + "Precio:" + precios[8];
  ar+= precios[8];
}
ar;




let total = parseInt(ac) + parseInt(ab) + (parseInt(ad)*parseInt(ak)) + parseInt(am) + parseInt(al) + parseInt(ar);
display += "<br>Total a pagar: " + total;



padre.innerHTML= display;
}
