var bar_on = false;
initToolbar();

function initToolbar(){
  document.getElementById("tb_button").onclick = function () { 
      toggleTB(); 
  };
  setupSideBar();
}

function toggleTB(){
	if (bar_on){
		closeNav();
	} else {
		openNav();
	}
	bar_on = !bar_on;
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function setupSideBar(){
  var sidenav = document.createElement("div");
  sidenav.id = "sidenav";
  sidenav.className = "sidenav";
  
  // create header
  var header = document.createElement("h1");
  header.style = "color: white; padding: 32px 8px 8px 32px;"
  header.appendChild(document.createTextNode("TOOLBAR"));
  sidenav.appendChild(header);
  
  // create links
  addLink(sidenav, "temp", "Link 1");
  addLink(sidenav, "temp", "Link 2");
  addLink(sidenav, "temp", "Link 3");
  
  
  document.body.appendChild(sidenav);
}

function addLink(parent, destination, text){
  var link = document.createElement("a");
  link.appendChild(document.createTextNode(text));
  link.style = 'color: white;';
  parent.appendChild(link);
}
