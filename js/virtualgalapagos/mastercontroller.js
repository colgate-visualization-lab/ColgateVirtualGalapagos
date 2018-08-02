var pageList; 
var next_btn;
var pageName;
var dev_mode = true;
var done_flags = [];

init();

function init(){
  // grab page name
  // NEEDS REFACTOR
  pageName = grabPageName();
  pageName = pageName.substr(0, pageName.length-5);
  
  // initialize page list
  pageList = ["Volcano_TerrainMap01", "panotour/Volcano_Exploration01", "panotour/Volcano_Exploration02", "panotour/Volcano_Exploration03", "panotour/Volcano_Exploration04", "panotour/Volcano_Exploration05", "Volcano_TerrainMap02", "Volcano_TerrainMap03", "Volcano_TerrainMap04", "Volcano_TerrainMapAges01", "Volcano_TerrainMapAges02", "Volcano_OtherVolcanoes01", "Volcano_TectonicPlateWhiteboard01", "Volcano_TectonicPlates01", "Volcano_PlatesGame01", "Volcano_TectonicPlates02", "Volcano_MantlePlumesWhiteboard01", "Volcano_SouthAmerica01", "Volcano_TerrainMap06", "Volcano_PlumePlacement01", "Volcano_WhereNext01", "Volcano_MainMenu01"];
  
  // setup progress storage
  initProgress();
  
  // setup control bar
  if (pageList.includes(pageName)){
    setupControlBar();
  } else {
    next_btn =  document.getElementById("next_btn");
    updateNext();
  }
  
  //  dev mode
  if (dev_mode){
      pageDone();
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
  if (localStorage.getItem(pageName) == "false" && !dev_mode){
    next_btn.disabled = true; 
  }
  next_btn.onclick = function () { 
      next();
  };
  var icon = document.createElement("i");
  icon.className = "material-icons";
  icon.innerHTML = "arrow_forward";
  next_btn.appendChild(icon);
  document.getElementById("nav_control").appendChild(next_btn);
}

function grabPageName(){
  var path = window.location.pathname;
  path = path.split("/").splice(-2);
  if (path[0] != "volcano"){
    return path.join('/');
  } else {
    return path[1];
  }
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
  var idx = pageList.indexOf(pageName);
  window.location.href = "/" + document.location.pathname.split("/").splice(1)[0] + "/volcano/" + pageList[idx+shift] + ".html";
}

function pageDone(type){
  next_btn.disabled = false;
  localStorage.setItem(pageName, "true"); 
}

function initProgress(){
  if (localStorage.getItem("initProgress") != "true"){
    for (i = 0; i < pageList.length; i++){
      localStorage.setItem(pageList[i], "false");
    }
    // special cases
    localStorage.setItem("TerrainMap03", "false");
    localStorage.setItem("PlumePlacement01", "false");
    localStorage.setItem("initProgress", "true");
  }
}

function updateNext(){
  if (localStorage.getItem(pageName) != "true" && !dev_mode){
    next_btn.disabled = true; 
  }
}

function addFlag(name){
  done_flags[name] = false;
  console.log("Adding flag of type: " + name);
}

function flagDone(name){
  console.log("Flag of type: " + name + " done");
  done_flags[name] = true;
  keys = Object.keys(done_flags);
  for (i = 0; i < keys.length ; i++) { 
    if (done_flags[keys[i]] == false){
      return;
    }
  }
  pageDone();
}