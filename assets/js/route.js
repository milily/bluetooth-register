/*datosDispositivos.forEach(function(e){
    $("#show").click(function(){
                var origen = ""
                var oporigen = `<option value="${e.movil_1.mac}">${e.movil_1.mac}</option>`;
                    $("#mac").append(oporigen);
    })
})*/


document.getElementById('next').addEventListener("click",function(){

  var canvas = document.getElementById('dibujo');
  var con = canvas.getContext('2d');
  var con2 = canvas.getContext('2d');
   rad = 0,
   rad2 = 0;
   linW = 0;

    var origenx1 = datosDispositivos.movil_1.origen1.x;
    var origeny1 = datosDispositivos.movil_1.origen1.y;

    var origenx2 = datosDispositivos.movil_2.origen2.x;
    var origeny2 = datosDispositivos.movil_2.origen2.y;


function draw() { 
    con.beginPath();

var registro = datosDispositivos.movil_1.origen1.registros.length;

for(var i =0; i < registro; i++){

    var cooX1 = parseInt(origenx1) - parseInt(datosDispositivos.movil_1.origen1.registros[i].coordenadaX);
    var cooY1 = parseInt(origeny1) + parseInt(datosDispositivos.movil_1.origen1.registros[i].coordenadaY);
    console.log(cooX1);
    con.arc(cooX1, cooY1, rad, 0, 2 * Math.PI,false);//Datos de coordenadas dinamicos llamando a las coordenadas del data
}

 rad++;
 if(rad == 10) {
     rad = 1;
 } else {
  con.clearRect(0,0,canvas.width,canvas.height);
 }
  
 con.lineWidth = 1;
 con.strokeStyle = '#99AE04';
 con.stroke();
 setTimeout(draw,250);
}
draw();
});

/*
function drawDos() { 
    con2.beginPath();

var registro = datosDispositivos.movil_2.origen1.registros.length;
console.log("origenx2"+origenx2);
console.log("origeny2"+origeny2);

for(var i =0; i < registro; i++){

    var cooX2 = parseInt(origenx2) + parseInt(datosDispositivos.movil_2.origen1.registros[i].coordenadaX);
    var cooY2 = parseInt(origeny2) + parseInt(datosDispositivos.movil_2.origen1.registros[i].coordenadaY);
    console.log("coox"+cooX2);

    con2.arc(cooX2, cooY2, rad2, 0, 2 * Math.PI,false);//Datos de coordenadas dinamicos llamando a las coordenadas del data
}

 rad2++;
 if(rad2 == 10) {
     rad2 = 1;
 } else {
  con2.clearRect(0,0,canvas.width,canvas.height);
 }
  
 con2.lineWidth = 1;
 con2.strokeStyle = '#99AE04';
 con2.stroke();
 setTimeout(drawDos,250);
}
drawDos();
})*/

/*
function draw2() {  
 con.beginPath();
 con.arc(490, 200, rad, 0, 2 * Math.PI,false);
 con.arc(390, 140, rad, 0, 2 * Math.PI,false);
 con.arc(340, 110, rad, 0, 2 * Math.PI,false);
 con.arc(300, 70, rad, 0, 2 * Math.PI,false);
 rad++;
 if(rad == 10) {
     rad = 1;
 } else {
  con.clearRect(0,0,canvas.width,canvas.height);
 } 
 
 con.lineWidth = 1;
 con.strokeStyle = 'red';
 con.stroke();
 setTimeout(draw2,250);
}


function mostrarRoute(){
  var valoruno = []
	var selector = document.getElementById("dispositivo").value;
	if(selector == valoruno){
		draw();
	}else{
		draw2();
	}
}
mostrarRoute();

})
/*
var arrX = []
datosDispositivos.forEach(function(e){
  /*e.registros[0 transformar esto en '37' +/- punto origen]*/
  /*arrX.push(e.registros[0])
})

arrX.forEach(function(e){

})*/