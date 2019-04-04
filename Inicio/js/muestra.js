$(document).ready(function(){
	var elementos=document.querySelectorAll("li");
	for (var i=0;i<elementos.length;i++){
		elementos[i].addEventListener("mouseover",pimagen);
		elementos[i].addEventListener("mouseout",qimagen);
	}
});

function pimagen(m){
	if (m.target==elem1) {
		$("#elem1").addClass("destacar");
		$("img").attr("src","imagenes/hielo.jpg");
	}
	else
		if (m.target==elem2) {
			$("#elem2").addClass("destacar");
			$("img").attr("src","imagenes/pue.jpg");
	}
	else
		if (m.target==elem3) {
		$("#elem3").addClass("destacar");
		$("img").attr("src","imagenes/aries.jpg");
	}
	else
		if (m.target==elem4) {
		$("#elem4").addClass("destacar");
		$("img").attr("src","imagenes/caballo.jpg");
	}
}

function qimagen(e){
	if (e.target==elem1) {
		$("#elem1").removeClass("destacar");
		$("img").removeAttr("src","imagenes/hielo.jpg");
	}
	else
		if (e.target==elem2) {
		$("#elem2").removeClass("destacar");
		$("img").removeAttr("src","imagenes/pue.jpg");
	}
	else
		if (e.target==elem3) {
		$("#elem3").removeClass("destacar");
		$("img").removeAttr("src","imagenes/aries.jpg");
	}
	else
		if (e.target==elem4) {
		$("#elem4").removeClass("destacar");
		$("img").removeAttr("src","imagenes/caballo.jpg");
	}
}