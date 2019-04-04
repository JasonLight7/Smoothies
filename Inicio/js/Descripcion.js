$(document).ready(function(){
	var elementos=document.querySelectorAll("li");
	for(var i=0;i<elementos.length;i++){
		elementos[i].addEventListener("mouseover",pimagen);
		elementos[i].addEventListener("mouseout",qimagen);
	}
});
 
 function pimagen(m){
	if(m.target==elemen1){
		$("#elemen1").addClass("destacar");
		$("#cara").attr("src","imagenes/gerson2.jpg");
		$("#cara").attr("width","150px");
			$("#cara").attr("height","200px");
	}
	else
			if(m.target==elemen2){
			$("#elemen2").addClass("destacar");
			$("#cara").attr("src","imagenes/sebas.jpg");
			$("#cara").attr("width","150px");
			$("#cara").attr("height","200px");

		}
		else
				if(m.target==elemen3){
				$("#elemen3").addClass("destacar");
				$("#cara").attr("src","imagenes/JA.png");
				$("#cara").attr("width","150px");
			    $("#cara").attr("height","200px");
			}

		}


function qimagen(e){
	if(e.target==elemen1){
		$("#elemen1").removeClass("destacar");
		$("#cara").removeAttr("src","imagenes/gerson2.jpg");
	}
	else
			if(e.target==elemen2){
			$("#elemen2").removeClass("destacar");
			$("#cara").removeAttr("src","imagenes/sebas.jpg");
		}
		else
				if(e.target==elemen3){
				$("#elemen3").removeClass("destacar");
				$("#cara").removeAttr("src","imagenes/JA.png");
			}

					}		