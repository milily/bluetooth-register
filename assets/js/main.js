$(document).ready(function() {
registro.forEach(function(el){
	var fecha = el.fecha;
	console.log(fecha);
	var separado=fecha.split('').slice(0,10).join('');
	console.log(separado);
})
});

	