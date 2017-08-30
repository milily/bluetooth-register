/*var canvas = $("#paper")[0];
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

<<<<<<< HEAD
/*c.lineTo(startX2 + (endX2 - startX2), startY2 + (endY2 - startY2));
var startX2 = endX;
var startY2 = endY;

var endX2 = 0;
var endY2 = 0;

var c = document.getElementById("paper");
var contexto = c.getContext("2d");

var cw = c.width = 350,
  cx = cw / 2;
var ch = c.height = 300,
  cy = ch / 2;

var rad = Math.PI / 180;

var a = {
  x: 50,
  y: 50,
  text: " A"
}
var b = {
  x: 300,
  y: 250,
  text: " B"
}

contexto.beginPath();
contexto.moveTo(a.x, a.y);
contexto.lineTo(b.x, b.y);
contexto.stroke();

contexto.font = "16px Verdana";
contexto.fillStyle = "blue";
contexto.fillText(a.text, a.x, a.y - 5);
contexto.fillText(b.text, b.x + 5, b.y);

var m = {
  x: ((b.x - a.x) / 2) + a.x,
  y: ((b.y - a.y) / 2) + a.y
}
contexto.beginPath();

contexto.strokeStyle = "red";
var n = 10;
for (var i = 0; i <= n; i++) {
  var s = {
    x: ((b.x - a.x) * i / n) + a.x,
    y: ((b.y - a.y) * i / n) + a.y
  }
  contexto.beginPath();
  contexto.arc(s.x, s.y, 3, 0, 2 * Math.PI);
  contexto.stroke();
}*/
/*
var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight;

var FPS = 60;
    
var canvas;
var context;
var dot;

init();

function init() {
  canvas = document.getElementById('paper');
  
  if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
  
    createTrail();
    
    setInterval(loop, 1000 / FPS);
  }
}

function createTrail() {
  dot = {
    x: 100, 
    y: 100,
    speed: 3,
    direction: Math.PI * 2 * Math.random()
  }
}

function updatePosition() {
  var dx = dot.x + dot.speed * Math.cos(dot.direction);
  var dy = dot.y + dot.speed * Math.sin(dot.direction);
  
  if (dx < 0 || dx > CANVAS_WIDTH || dy < 0 || dy > CANVAS_HEIGHT) {
    dot.direction = Math.PI * 2 * Math.random();
    updatePosition();
  } else {
    dot.x = dx;
    dot.y = dy;
  }
}

function loop() {
  updatePosition();
  
  // Draw over the whole canvas to create the trail effect
  context.fillStyle = 'rgba(255, 255, 255, .05)';
  context.fillRect(1000, 1000, canvas.width, canvas.height);
  
  // Draw the dot
  context.beginPath();
  context.fillStyle = '#ff0000';
  context.moveTo(dot.x, dot.y);
  context.arc(dot.x, dot.y, 3, 0, Math.PI*2, true);
  context.fill();
}*/

document.getElementById('next').addEventListener("click",function(){
var valoruno = $("#uno").val();
var valordos = $("#dos").val();

  var canvas = document.getElementById('dibujo');
  var con = canvas.getContext('2d'),
   rad = 0,
   linW = 0;
 
 function draw() {  con.beginPath();
 con.arc(350, 150, rad, 0, 2 * Math.PI,false);
 con.arc(200, 200, rad, 0, 2 * Math.PI,false);
 con.arc(180, 130, rad, 0, 2 * Math.PI,false);
 
 rad++;
 if(rad == 10) {
     rad = 1;
 }  con.clearRect(0,0,canvas.width,canvas.height);
 con.lineWidth = 1;
 con.strokeStyle = ' #99AE04';
 con.stroke();
 setTimeout(draw,250);
}


function draw2() {  
 con.beginPath();
 con.arc(490, 200, rad, 0, 2 * Math.PI,false);
 con.arc(390, 140, rad, 0, 2 * Math.PI,false);
 con.arc(340, 110, rad, 0, 2 * Math.PI,false);
 con.arc(300, 70, rad, 0, 2 * Math.PI,false);  
 rad++;
 if(rad == 10) {
     rad = 1;
 }
 
 con.lineWidth = 1;
 con.strokeStyle = 'red';
 con.stroke();
 setTimeout(draw2,350);
}


function mostrarRoute(){
	var selector = document.getElementById("dispositivo").value;
	if(selector == valoruno){
		draw();
	}else{
		draw2();
	}
}
mostrarRoute();

})


