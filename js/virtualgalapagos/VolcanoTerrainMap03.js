var ferd_click = false;
var sc_click = false;

init();


function init(){
  done_flag = false;
}

function on(name) {
  if (name=="santacruz"){
    sc_click = true;
  } else if (name=="fernandina"){
    ferd_click = true;
  }  
  document.getElementById("overlay").style.display = "block";
  document.getElementById(name + "_inner").style.display = "block";
}

function off(name) {
  document.getElementById("overlay").style.display = "none";
  document.getElementById(name + "_inner").style.display = "none";
  if (sc_click && ferd_click){
    done_flag = true;
  }
}
