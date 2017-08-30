$(document).ready(function() {
	registro.forEach(function(el){
	console.log(el);
	var disp =el.origen;

	function eliminateDuplicates(disp) {
 var i,
     len=disp.length,
     out=[],
     obj={};

 for (i=0;i<len;i++) {
    obj[arr[i]]=0;
 }
 for (i in obj) {
    out.push(i);
 }
 return out;
}
eliminateDuplicates();
})
})
	







	/* $(e).filter("00:28:F8:C9:E7:BB").css("background-color", "yellow");
$(e).filter (function(y){
	if (y.mac==="00:28:F8:C9:E7:BB"){
return true;
	}
})


var computadores = productos.filter(function(producto){
	return producto.tipo === "computador";
});

var computadores =[];
for (var i=0; i<productos.length;i++){
	if (productos[i].tipo == "computador"){
		computadores.push(productos[i]);
	}
}

	if(jQuery.inArray("test", disp) !== -1)$.inArray(disp, disp);
$('#mac').append(disp);

		if(jQuery.inArray("test", disp) !== -1)$.inArray(disp, disp);
	
	var arr = [];
	var colores = ['Azul', 'Rojo', 'Verde', 'Amarillo'];
$.inArray('Verde', colores);
	if(jQuery.inArray("test", arr) !== -1)
	$('#mac').append(disp);


l1=[1,2,3];
l2=[2,3,4];


function intersectionSet2(l1,l2){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1
	});
};


function intersection(l1,l2){
	var l3=[];
	for (var i=0; i<l1.length;i++){
		for(var j=0;j<l2.length;j++){
			if(l1[i]===l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	return l3;
}



var productos =[
{
	nombre:"pijama",
	tipo: "ropa"
},
{
	nombre:"nevera",
	tipo: "electrodoméstrico"
},
{
	nombre:"asus",
	tipo: "computador"
},
{
	nombre:"macbook",
	tipo: "computador"
},
{
	nombre:"pijama",
	tipo: "ropa"
},
{
	nombre:"toshiba",
	tipo: "computador"
},
];

var computadores = productos.filter(function(producto){
	return producto.tipo === "computador";
});

var computadores =[];
for (var i=0; i<productos.length;i++){
	if (productos[i].tipo == "computador"){
		computadores.push(productos[i]);
	}
}
/*var uniqueNames = [];
$.each(disp, function(i, el){
    if(jQuery.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    //if(jQuery.inArray("test", myarray) !== -1)
});*/
	//})
//});


/*$(document).ready(function() {
	var carrera = document.getElementById("mac"); /* Para no tener que llamar a cada rato a getElementById */
/*registro.forEach(function(el){
	console.log(el);
	var disp =el.origen;
	carrera.append('disp');
	for(var i=0;i<disp.length;i++){ 
        carrera.options[i] = new Option(disp[i]);
       }
})

  // })

/*$(document).ready(function() {

	var arr = []
	registro.forEach(function(e){

		$("#show").click(function(){
			
                var origen = ""
                var oporigen = `<option value="${e.origen}">${e.origen}</option>`;
                    $("#origen").append(oporigen);
            $(".m").text(arr)
            arr.push(e.rssi) 

		})
	}) });*/

//$(document).ready(function() {
	
/*registro.forEach(function(el){
	//var origen=el.origen;

function initCanvas(){
	var ctx=document.getElementById('paper').getContext('2d');
	var registro = [
	{id:"house", "x":50, "y":70, "w":40, "h":20,"bg": "magenta"}, 
		{id:"house", "x":100, "y":20, "w":10, "h":60,"bg": "green"},
		{id:"house", "x":190, "y":34, "w":50, "h":69,"bg": "blue"},
];
for (var i=0;i< registro.length; i++){
	var b=registro[i];
	ctx.fillStyle=b.bg;
	ctx.fillRect(b.x,b.y,b.w,b.h);
}
}

window.addEventListener('load', function(event){
	initCanvas();
});
})*/
//})



//$(document).ready(function() {
/*registro.forEach(function(el){
	var fecha = el.fecha;
	console.log(fecha);
	var separado=fecha.split('').slice(0,10).join('');
	console.log(separado);
})*/

/*var groupBy = function (miarray, prop) {
    return miarray.reduce(function(groups, item) {
        var val = item[prop];
        groups[val] = groups[val] || {date: item.date, origen: 0, mac: 0,fecha: 0};
        groups[val].origen += item.origen;
        groups[val].mac += item.mac;
        groups[val].fecha += item.fecha;
        return groups;
    }, {});
}

console.log(groupBy(registro,'date'));

var canvas = $("#paper")[0];
var c = canvas.getContext("2d");
//punto inicial x e y
var startX = 40; 
var startY = 300;
//punto final x e y
var endX = 400;
var endY = 400;
var amount = 0;
setInterval(function() {
    amount += 0.012; // cambia la duración de la linea
    if (amount > 1) amount = 1;
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.strokeStyle = "#99AE04"; //color linea
    c.moveTo(startX, startY);
    // lerp : a  + (b - a) * f
    c.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
    c.stroke(); //metodo que dibuja la linea
}, 20);


function redrawAll(registro){
    context.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<registro.length;i++){
        if(registro[i].isVisible){
            drawLinePath(registro[i]);
        }
    }
}*/

