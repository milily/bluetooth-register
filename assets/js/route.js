var canvas = $("#paper")[0];
var c = canvas.getContext("2d");
//punto inicial x e y
var startX = 40; 
var startY = 30;
//punto final x e y
var endX = 100;
var endY = 200;
var amount = 0;



setInterval(function() {
    amount += 0.012; // cambia la duración de la linea
    if (amount > 1) amount = 1;
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.strokeStyle = "#99AE04"; //color linea
    c.beginPath();
    c.fillRect(endX,endY,10,10);
    c.fillRect(startX,startY,10,10);
    c.lineWidth = 5;
    c.lineCap = 'round';
  
    c.moveTo(startX, startY);
	

    // lerp : a  + (b - a) * f
    c.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
    
    c.stroke(); //metodo que dibuja la linea
}, 20);

/*c.lineTo(startX2 + (endX2 - startX2), startY2 + (endY2 - startY2));
var startX2 = endX;
var startY2 = endY;

var endX2 = 0;
var endY2 = 0;
*/