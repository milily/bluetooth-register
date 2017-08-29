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