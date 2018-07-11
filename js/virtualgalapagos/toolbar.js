var bar_on = false;
initToolbar();

function initToolbar(){
  // create toolbar button
  var tb_button = document.createElement('BUTTON');
  tb_button.className = 'btn btn-primary';
  tb_button.id = 'toolbar_button';
  var temp_text = document.createTextNode('Toolbar');
  tb_button.appendChild(temp_text);
  tb_button.onclick = function () { 
      toggle(); 
  };
  document.body.appendChild(tb_button);
  
  setupNavBar();
}

function toggle(){
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
	document.getElementById("fieldbook_button").style.marginLeft = "250px";
    document.getElementById("toolbar_button").style.marginLeft = "-100px";
  document.getElementById("toolbar_button").style.backgroundColor = "black";
  document.getElementById("toolbar_button").style.color = "black";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
	document.getElementById("fieldbook_button").style.marginLeft = "0px";
    document.getElementById("toolbar_button").style.marginLeft = "0px";
  document.getElementById("toolbar_button").style.backgroundColor = "red";
  document.getElementById("toolbar_button").style.color = "white";
}

function setupNavBar(){
  var sidenav = document.createElement("div");
  sidenav.id = "sidenav";
  sidenav.className = "sidenav";
  
  // create header
  var header = document.createElement("h1");
  header.style = "color: white; padding: 8px 8px 8px 32px;"
  header.appendChild(document.createTextNode("TOOLBAR"));
  sidenav.appendChild(header);
  
  // create close button
  var tb_closebtn = document.createElement("a");
  tb_closebtn.className = "closebtn";
  tb_closebtn.onclick = function () { 
      toggle(); 
  };
  tb_closebtn.appendChild(document.createTextNode("X"));
  sidenav.appendChild(tb_closebtn);
  
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

//<!--
//	<div id="sidenav" class="sidenav">
//      <h1 style="color: white; padding: 8px 8px 8px 32px;">TOOLBAR</h1>
//      <a href="javascript:void(0)" class="closebtn" onclick="toggle()">&times;</a>
//    </div>
//-->