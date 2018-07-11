var label_cache;
var isl_array = ["Banana", "Orange", "Apple", "Mango"];

function allowDrop(ev) {
  ev.preventDefault();
//  if (!done_array.contains(ev)){
//    ev.preventDefault();
//  }
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  label_cache = ev.target;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
  
//  if (label_cache.innerHTML.trim() == "700,000 years" && ev.target.title == "Fernandina") {
//    label_cache.innerHTML = label_cache.innerHTML + " - " + ev.target.title;
//    label_cache.draggable = false;
//  }
}

