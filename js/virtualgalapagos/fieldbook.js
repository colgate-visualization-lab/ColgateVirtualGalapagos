var myHeading = document.querySelector('h1');
var textArea;
var pageNumber;
var maxPages = 10;
var fieldbookHeader;
var innerDiv;

initFieldbook();

function initFieldbook() {
	pageNumber = 1;
	
  	// create fieldbook button
	var fb_button = document.createElement('BUTTON');
	fb_button.className = 'btn btn-primary';
	fb_button.id = 'fieldbook_button';
	var temp_text = document.createTextNode('Fieldbook');
	fb_button.appendChild(temp_text);
	fb_button.onclick = function () { 
    	fieldbookOn(); 
    };
	document.body.appendChild(fb_button);
	
	// create fieldbook overlay div and elements
	var fb_overlay = document.createElement('div');
	fb_overlay.id = 'fb_overlay';
	var fb_overlay_inner = document.createElement('div');
	innerDiv = fb_overlay_inner;
	fb_overlay_inner.id = 'fb_overlay_inner';
	fieldbookHeader = document.createTextNode('Fieldbook pg. ' + pageNumber);
	textArea = document.createElement('textarea');
	textArea.id = 'fieldbook_ta';
	textArea.rows = 4;
	textArea.cols = 50;
	var fb_save_btn = document.createElement('BUTTON');
	fb_save_btn.className = 'btn btn-secondary';
	fb_save_btn.appendChild(document.createTextNode('Save and Close'))
	fb_save_btn.onclick = function () { 
    	saveAndClose(); 
    };
	var fb_discard_btn = document.createElement('BUTTON');
	fb_discard_btn.className = 'btn btn-secondary';
	fb_discard_btn.appendChild(document.createTextNode('Discard Changes'))
	fb_discard_btn.onclick = function () { 
    	discardAndClose(); 
    };
	var fb_back_btn = document.createElement('BUTTON');
	fb_back_btn.className = 'btn btn-secondary';
	fb_back_btn.appendChild(document.createTextNode('Back'))
	fb_back_btn.onclick = function () { 
    	setPage(pageNumber-1); 
    };
	var fb_next_btn = document.createElement('BUTTON');
	fb_next_btn.className = 'btn btn-secondary';
	fb_next_btn.appendChild(document.createTextNode('Next'))
	fb_next_btn.onclick = function () { 
    	setPage(pageNumber+1); 
    };	
	
	// add divs to page
	document.body.appendChild(fb_overlay);
	fb_overlay.appendChild(fb_overlay_inner);
	fb_overlay_inner.appendChild(fieldbookHeader);
	fb_overlay_inner.appendChild(document.createElement('br'));
	fb_overlay_inner.appendChild(textArea);
	fb_overlay_inner.appendChild(document.createElement('br'));
	fb_overlay_inner.appendChild(fb_save_btn);
//	fb_overlay_inner.appendChild(fb_discard_btn);
	fb_overlay_inner.appendChild(fb_back_btn);
	fb_overlay_inner.appendChild(fb_next_btn);
	
}

function setPage(number){
	if (number > maxPages || number < 1 ){
		
	} else {
		saveBook();
		pageNumber = number;
		fieldbookHeader.nodeValue = 'Fieldbook pg. ' + pageNumber;
		textArea.value = localStorage.getItem('fb_content'+pageNumber);
	}
}

function saveAndClose(){
	saveBook();
	fieldbookOff();
}

function discardAndClose(){
	fieldbookOff();
}

function fieldbookOn() {
	textArea.value = localStorage.getItem('fb_content'+pageNumber);
	document.getElementById("fb_overlay").style.display = "block";
}

function fieldbookOff(){
	document.getElementById("fb_overlay").style.display = "none";
}

function saveBook() {
  localStorage.setItem('fb_content'+pageNumber, textArea.value);
}

function updateHeading() {
  myHeading.textContent = localStorage.getItem('fb_content');
}

function clearFieldbook(){
  localStorage.clear();
}

