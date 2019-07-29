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
var x = canvas.width/5;
var y = canvas.height;

canvas.onclick = animate;
imgTag.src = "../../../images/islandlife/island.png"; 
imgTag.style.width = "20%";

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
  ctx.drawImage(imgTag, x, y);                      
  y -= 4;
  if (y > 50) requestAnimationFrame(animate)       
}
