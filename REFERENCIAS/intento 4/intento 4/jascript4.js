var inicio = false;
var Sinicio="inicio";
var contacto = false;
var Scontacto = "contacto";
var ver = false;
var Sver ="ver";
var videos = false;
var Svideos = "videos";
var experiencia = false;
var Sexperiencia = "experiencia";


$(document).ready(function() {
	/*Acontecimientos de INICIO*/
	
	
	
	$("#btn-principal").click(function(){
		inicio = clickInicio(inicio);
	});	
	$("#cuerpo").click(function(){
		inicio = clickBody(Sinicio, inicio);
	});
	/*Fin Inicio*/
	/*Acontecimientos de CONTACTO*/
	
	
	$("#contacto").click(function(){
		contacto = clickContacto(contacto);
	});	
	$("#cuerpo").click(function(){
		contacto = clickBody(Scontacto, contacto);
		
	});
	
	/*Fin Contacto*/
	
	/*Acontecimientos de VER*/
	
	
	
	$("#ver").click(function(){
		ver = clickVer(ver);
	});	
	$("#cuerpo").click(function(){
		ver = clickBody(Sver, ver);
	});
	$("#pantallaCompleta").click(function(){
		pantallaCompleta(document.documentElement);
	});
	$("#cambiarColor").click(function(){
		cambiaColor();
	});
	/*Fin Ver*/
	
});	

function clickIcono(icono){
	$("#"+icono).css("background-color","rgba(0,0,255,0.7)");
	return true;
}

function clickVer(n){
	if (n == true){
		$("#ver ol").css("display","none");
		n = false;	
	}else{
		$("#ver ol").css("display","block");
		$("#contacto ol").css("display","none");
		contacto = false;
		$("#btn-principal ol").css("display","none");
		inicio = false;
		
		n = true;
	}
	return n;
}

function clickContacto(n){
	if (n == true){
		$("#contacto ol").css("display","none");
		n = false;	
	}else{
		$("#contacto ol").css("display","block");
		$("#ver ol").css("display","none");
		ver= false;
		$("#btn-principal ol").css("display","none");
		inicio = false;
		n = true;
	}
	return n;
}
function clickInicio(n){
	if (n == true){
		$("#btn-principal ol").css("display","none");
		n = false;	
	}else{
		$("#btn-principal ol").css("display","block");
		$("#contacto ol").css("display","none");
		contacto = false;	
		$("#ver ol").css("display","none");
		inicio = false;	
		n = true;
	}
	return n;
}

function clickBody(nombre, booleano){
	if((nombre == "contacto") && (booleano == true)){
		$("#contacto ol").css("display","none");
	}
	if((nombre == "ver") && (booleano == true)){
		$("#ver ol").css("display","none");
	}
	if((nombre == "inicio") && (booleano == true)){
		$("#btn-principal ol").css("display","none");
	}
	return false;
}


function basicMenu(contacto,Bcontacto,ver,BVer,inicio,Binicio,clickea){
	if(clickea == contacto){
		if(Bver == true || Binicio == true){
			$("#ver ol").css("display","none");
			Bver = false;
			$("#btn-principal ol").css("display","none");
			Binicio = false;
		}
	}
}

function pantallaCompleta(elem) {
  //Si el navegador es Mozilla Firefox
  if(elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  }
  //Si el navegador es Google Chrome
  else if(elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen();
  }
  //Si el navegador es otro
  else if(elem.requestFullScreen) { 
    elem.requestFullScreen(); 
  }
}

function cambiaColor(){
	var num = Math.round(Math.random()*10);
	if(num == 0){$("body").css("background-color","#333");}
	if(num == 1){$("body").css("background-color","#F0F");}
	if(num == 2){$("body").css("background-color","#999");}
	if(num == 3){$("body").css("background-color","#CCC");}
	if(num == 4){$("body").css("background-color","#FFF");}
	if(num == 5){$("body").css("background-color","#F00");}
	if(num == 6){$("body").css("background-color","#0F0");}
	if(num == 7){$("body").css("background-color","#00F");}
	if(num == 8){$("body").css("background-color","#FF0");}
	if(num == 9){$("body").css("background-color","#0FF");}
}
