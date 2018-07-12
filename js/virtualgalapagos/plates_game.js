var label_cache;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  label_cache = ev.target;
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
  
  var labeltext = data.slice(0, data.length-1);
  var img_text = ev.target.id.slice(4, ev.target.id.length-1);
  if (labeltext == img_text){
    var src = ev.target.src;
    ev.target.src = "../images/drag_drop_tectonics/" + ev.target.id.slice(4, ev.target.id.length) + "correct.png";
    label_cache.style.display = "none";
  } else {
    alert("Try again!")
  }
  
}