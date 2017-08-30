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

/

arrX.forEach(function(e){

})*/