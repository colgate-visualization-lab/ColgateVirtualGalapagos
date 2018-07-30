var pageList; 
var next_btn;
dev_mode = false;

init();

function init(){
  // initialize page list
  pageList = ["Volcano_TerrainMap01", "panotour/Volcano_Exploration01", "panotour/Volcano_Exploration02", "panotour/Volcano_Exploration03", "panotour/Volcano_Exploration04", "panotour/Volcano_Exploration05", "Volcano_TerrainMap02", "Volcano_TerrainMap03", "Volcano_TerrainMap04", "Volcano_TerrainMapAges01", "Volcano_TerrainMapAges02", "Volcano_OtherVolcanoes01", "Volcano_TectonicPlateWhiteboard01", "Volcano_TectonicPlates01", "Volcano_PlatesGame01", "Volcano_TectonicPlates02", "Volcano_MantlePlumesWhiteboard01", "Volcano_SouthAmerica01", "Volcano_TerrainMap06", "Volcano_PlumePlacement01", "Volcano_PlumesYes01", "Volcano_PlumesNo01", "Volcano_WhereNext01", "Volcano_MainMenu01"];
  
  // setup control bar
  setupControlBar();
  
  //  dev mode
  if (dev_mode){
      enableNext();
  }
}


// create back and next buttons
function setupControlBar(){
  var back_btn = document.createElement('BUTTON');
  back_btn.className = 'btn btn-dark';
  back_btn.onclick = function () { 
      back();
  };
  var icon = document.createElement("i");
  icon.className = "material-icons";
  icon.innerHTML = "arrow_back";
  back_btn.appendChild(icon);
  document.getElementById("nav_control").appendChild(back_btn);
  
  next_btn = document.createElement('BUTTON');
  next_btn.className = 'btn btn-dark';
  next_btn.style = "margin-left: 5px;";
  // Button disabled until user done with page
  next_btn.disabled = true;
  next_btn.onclick = function () { 
      next();
  };
  var icon = document.createElement("i");
  icon.className = "material-icons";
  icon.innerHTML = "arrow_forward";
  next_btn.appendChild(icon);
  document.getElementById("nav_control").appendChild(next_btn);
}

// go to next page
function next(){
  movePage(1);
}

// go to previous page
function back(){
  movePage(-1);
}

function movePage(shift){
  var path = window.location.pathname;
  path = path.split("/").splice(-2);
  var page;
  if (path[0] != "volcano"){
    page = path.join('/');
  } else {
    page = path[1];
  }
  var idx = pageList.indexOf(page.substr(0, page.length-5));
  console.log();
  window.location.href = "/" + document.location.pathname.split("/").splice(1)[0] + "/volcano/" + pageList[idx+shift] + ".html";
}

function enableNext(){
  next_btn.disabled = false;
}