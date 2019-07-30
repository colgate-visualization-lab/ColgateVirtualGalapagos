function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function allowDrop(ev) {
    event.preventDefault()
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var imgTag = new Image();
canvas.height = canvas.width/3;
var x = 0;
var y = canvas.height;

canvas.onclick = animate;
imgTag.src = "../../../images/islandlife/island.png"; 

function animate() {
    console.log(imgTag.width);
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
  ctx.drawImage(imgTag, x, y, 200, 100);                      
  y -= 4;
  if (y > 10) requestAnimationFrame(animate)       
}
