function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function allowDrop(ev) {
    event.preventDefault()
}

function drop(ev) {
    dropdrag_dict = {'drag1':'div1', 'drag2':'div2', 'drag3':'div3', 'drag4':'div4', 'drag5':'div5', 'drag6':'div6'}
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.target.id, data)
    if (ev.target.id == dropdrag_dict[data])
        ev.target.appendChild(document.getElementById(data));
    else
        alert('Wrong answer');
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var imgTag = new Image();
canvas.height = canvas.width/3;
var x = 0;
var y = canvas.height;

canvas.onclick = animate;
imgTag.src = "../../../images/islandlife/islandsmaller.png"; 

function animate() {
    console.log(imgTag.width);
  ctx.clearRect(0, 0, canvas.width, canvas.height);  
  ctx.drawImage(imgTag, x, y, 200, 100);                      
  y -= 4;
  if (y > 10) requestAnimationFrame(animate)       
}
