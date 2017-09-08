/*aquí va tu código*/
//DATOS DE VALIDACION DE LOS IMPUT
function guardar(){
	localStorage.nombre = document.getElementById('clave').value;
	localStorage.comentario =document.getElementById('valor').value;
	// mostrar();
}

function mostrar(){
	if ((localStorage.nombre != undefined) && (localStorage.comentario != undefined)) {
		document.getElementById('textSave').innerHTML += "<h4>"+localStorage.nombre+ "</h4>" + "<br/>"+ localStorage.comentario+"<hr>"+"<br/>";
	} else {
		document.getElementById('textSave').innerHTML = "No has introducido tu nombre y tu comentario";
	}
}

// otra forma de mostrar el nombre y comentario
// function mostrar(){
//  	$('#textSave').append('<div><h4>'+localStorage.nombre+'</h4><p>'+localStorage.comentario+'</p></div>');

// }


// aplicando DOM
// function mostrar(){

// 	var textGuardado = document.getElementById('textSave');
//   $('#textSave').append('<p>dasdas</p>');
// 		var div = document.createElement('div');
// 		div.append('<p>ddddddddddd</p>');
// 		var name = localStorage.key(i);
// 		var clave = localStorage.getItem(name);

// 		div.appendChild (clave);
// 		textGuardado.appendChild(div);

// }


function limpiar(){
	document.getElementById('clave').value = "";
	document.getElementById('valor').value ="";
}

