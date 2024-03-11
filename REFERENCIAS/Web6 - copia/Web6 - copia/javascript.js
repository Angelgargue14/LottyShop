/*Mostrar y ocultar menu de navegacion*/
function mostrar(){
	var btnmenu = document.getElementById('chk-menu').checked;
	if (btnmenu == true){
		var menu = document.getElementById('menu').style.margin = "102px 0px";
		var contenido = document.getElementById('contenido').style.margin="0 200px";
		var contenido_AR = document.getElementById('contenido_AR').style.margin="0 200px";
		var contenido_MR = document.getElementById('contenido_MR').style.margin="0 200px";
	}else {
		var menu = document.getElementById('menu').style.margin = "102px -70%";
		var contenido = document.getElementById('contenido').style.margin="0 0";
		var contenido_AR = document.getElementById('contenido_AR').style.margin="0 0";
		var contenido_MR = document.getElementById('contenido_MR').style.margin="0 0";
	}
}

/*Galeria*/
var acumulador = 1;
function galeria(posicion){
	
	if(posicion == 1){
		acumulador = acumulador + posicion;
	  if(acumulador == 2){
		  var foto1 = document.getElementById('gal01').style.display="none";
		  var foto2 = document.getElementById('gal02').style.display = "block";
	  }else if(acumulador == 3){
		  var foto2 = document.getElementById('gal02').style.display = "none";
		  var foto3 = document.getElementById('gal03').style.display = "block";
	  }else if(acumulador == 4){
		  var foto3 = document.getElementById('gal03').style.display = "none";
		  var foto4 = document.getElementById('gal04').style.display =  "block";
	  }else if(acumulador == 5){
		  var foto4 = document.getElementById('gal04').style.display =  "none";
		  var foto5 = document.getElementById('gal05').style.display =  "block";
	  }else if(acumulador == 6){
		  var foto5 = document.getElementById('gal05').style.display =  "none";
		  var foto1 = document.getElementById('gal01').style.display= "block";
		  acumulador = 1;
	  }
	 }else if(posicion == '-1'){
		 acumulador = acumulador - 1;
		 if(acumulador == 0){
			 var foto1 = document.getElementById('gal01').style.display="none";
			 var foto5 = document.getElementById('gal05').style.display =  "block";
			 acumulador = acumulador + 5;
		 }else if(acumulador == 1){
			 var foto2 = document.getElementById('gal02').style.display = "none";
			 var foto1 = document.getElementById('gal01').style.display= "block";
		 }else if(acumulador == 2){
			 var foto3 = document.getElementById('gal03').style.display = "none";
			 var foto2 = document.getElementById('gal02').style.display = "block";
		 }else if(acumulador == 3){
			 var foto4 = document.getElementById('gal04').style.display =  "none";
			 var foto3 = document.getElementById('gal03').style.display = "block";
		 }else if(acumulador == 4){
			 var foto5 = document.getElementById('gal05').style.display =  "none";
			 var foto4 = document.getElementById('gal04').style.display =  "block";
		 }
	 } 
}
function estilosTarjetasOver_fav_general(id){
	var descripcion = document.getElementById(id).style.top = "80%";
	descripcion = document.getElementById(id).style.height = "20%";
	descripcion = document.getElementById(id).style.transition ="0.5s";
	descripcion = document.getElementById(id).style.fontSize="1.4em";
}
function estilosTarjetasOut_fav_general(id){
	var descripcion = document.getElementById(id).style.top = "90%";
	descripcion = document.getElementById(id).style.height = "10%";
	descripcion = document.getElementById(id).style.fontSize="1.2em";
}

function menu(id){
	var contenido = document.getElementById('contenido');
	var contenidoAR = document.getElementById('contenido_AR');
	var contenidoMR = document.getElementById('contenido_MR');
	var contenidoBR = document.getElementById('contenido_BR');
	var contenidoAPK = document.getElementById('contenido_APK');
	var contenidoAPKJ = document.getElementById('contenido_APKJ');
	var contenidoEMU = document.getElementById('contenido_EMU');
	var contenidoPROG = document.getElementById('contenido_PROG');
	
	/*var altos = document.getElementById('btn_AR');
	var medios = document.getElementById('btn_MR');
	var bajos = document.getElementById('btn_BR');
	var aplicaciones = document.getElementById('btn_APK');
	var juegosAKPJ = document.getElementById('btn_APKJ');
	var emuladores = document.getElementById('btn_EMU');
	var programas = document.getElementById('btn_PROG');*/
	
	if(id === 'btn_AR'){
		contenido.style.display = "none";
		contenidoAR.style.display = "block";
		contenidoMR.style.display = "none";
		contenidoBR.style.display ="none";
		contenidoEMU.style.display ="none";	
		contenidoPROG.style.display ="none";
		contenidoAPK.style.display ="none";	
		contenidoAPKJ.style.display ="none";
	}
	if(id === 'btn_MR'){
		contenido.style.display = "none";
		contenidoAR.style.display = "none";
		contenidoMR.style.display = "block";
		contenidoBR.style.display ="none";	
		contenidoEMU.style.display ="none";	
		contenidoPROG.style.display ="none";
		contenidoAPK.style.display ="none";	
		contenidoAPKJ.style.display ="none";
	}
	if(id === 'btn_BR'){
		contenido.style.display = "none";
		contenidoAR.style.display = "none";
		contenidoMR.style.display = "none";
		contenidoBR.style.display ="block";
		contenidoEMU.style.display ="none";	
		contenidoPROG.style.display ="none";
		contenidoAPK.style.display ="none";	
		contenidoAPKJ.style.display ="none";	
	}
	if(id === 'btn_APK'){
		contenido.style.display = "none";
		contenidoAR.style.display = "none";
		contenidoMR.style.display = "none";
		contenidoBR.style.display ="none";
		contenidoEMU.style.display ="none";	
		contenidoPROG.style.display ="none";
		contenidoAPK.style.display ="block";
		contenidoAPKJ.style.display ="none";		
	}
	if(id === 'btn_APKJ'){
		contenido.style.display = "none";
		contenidoAR.style.display = "none";
		contenidoMR.style.display = "none";
		contenidoBR.style.display ="none";
		contenidoEMU.style.display ="none";	
		contenidoPROG.style.display ="none";
		contenidoAPK.style.display ="none";
		contenidoAPKJ.style.display ="block";		
	}
	if(id === 'btn_EMU'){
		contenido.style.display = "none";
		contenidoAR.style.display = "none";
		contenidoMR.style.display = "none";
		contenidoBR.style.display ="none";
		contenidoEMU.style.display ="block";
		contenidoPROG.style.display ="none";
		contenidoAPK.style.display ="none";	
		contenidoAPKJ.style.display ="none";		
	}
	if(id === 'btn_PROG'){
		contenido.style.display = "none";
		contenidoAR.style.display = "none";
		contenidoMR.style.display = "none";
		contenidoBR.style.display ="none";
		contenidoEMU.style.display ="none";
		contenidoPROG.style.display ="block";
		contenidoAPK.style.display ="none";
		contenidoAPKJ.style.display ="none";
	}
	
}