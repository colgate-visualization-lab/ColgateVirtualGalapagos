"use strict"
//
// How to use this module
// HTML page must use the layout template
// must include the following "import {Fieldbook} from 'FILEPATH/fieldbook.js';" in the module's fieldbook controller
// the subclass must override updatePages method
// 
// call init, updatePages, start methods
//

import {MasterController} from "./mastercontroller.js";

class Fieldbook {
	constructor(pages, numPages, mastercontroller){
		if (!mastercontroller instanceof MasterController){
			throw "MasterController must be instantiated";
		}
		if (!new.target){
			return new Fieldbook();
		}
		this.mastercontroller = mastercontroller;
		this.divArray = [];
		this.pagesArray = pages;
		this.numPages = numPages;
		this.innerDiv;
		this.overlayDiv;
		this.fb_on = false;
	}

	init(){
		this.setUp();
		this.createDivs();
	}

	updatePages(){
		throw "Must override this method in the submodule";
		// over ride this method for each submodule
	}
	// supply the fb_page num used by the current page
	start(currentPage){
		this.createNavBars();
		this.addDivs();
		this.updatePages();
		this.setPage(currentPage);
	}

	setUp(){
		var fb_obj = this;
		this.overlayDiv = document.createElement('div');
		this.overlayDiv.id = 'fb_overlay';
		document.body.append(this.overlayDiv);
		document.getElementById("fb_button").onclick = function () { // persistent fieldbook button
			fb_obj.toggleFB(); 
		};
	}

	// toggle Fieldbook on and off
	toggleFB(){
		if (this.fb_on){
			this.saveAndClose();
		} else {
			this.fieldbookOn();
		}
		this.fb_on = !this.fb_on;
	}

	createDivs(){
		// var numPages = this.numPages;
		for (var i = 0; i < this.numPages; i++) { 
			var inner_div = document.createElement('div');
			inner_div.id = 'fb_overlay_inner';
			this.divArray.push(inner_div);
		} 
	}
	
	// create the (mostly) identical navigational buttons for each fb page
	createNavBars(){
		var fb_obj = this;
		var len = this.divArray.length;
		for (var i = 0; i < len; i++){
			var inner_div = this.divArray[i];
			var save_btn = document.createElement('BUTTON');
			save_btn.className = 'btn btn-light btn-sm';
			var icon = document.createElement("i");
			icon.className = "material-icons";
			icon.innerHTML = "close";
			save_btn.appendChild(icon);
			save_btn.onclick = function () { 
				fb_obj.toggleFB();
			};

			var back_btn = document.createElement('BUTTON');
			back_btn.className = 'btn btn-light btn-sm';
			icon = document.createElement("i");
			icon.className = "material-icons";
			icon.innerHTML = "arrow_back";
			back_btn.appendChild(icon);
			back_btn.onclick = function () { 
				fb_obj.setPage(Fieldbook.pageNumber-1); 
			};

			var next_btn = document.createElement('BUTTON');
			next_btn.className = 'btn btn-light btn-sm';
			icon = document.createElement("i");
			icon.className = "material-icons";
			icon.innerHTML = "arrow_forward";
			next_btn.appendChild(icon);
			next_btn.onclick = function () { 
				fb_obj.setPage(Fieldbook.pageNumber+1); 
			};

			var home_btn = document.createElement('BUTTON');
			home_btn.className = 'btn btn-light btn-sm';
			icon = document.createElement("i");
			icon.className = "material-icons";
			icon.innerHTML = "home";
			home_btn.appendChild(icon);
			home_btn.onclick = function () { 
				fb_obj.setPage(1); 
			};

			var clear_btn = document.createElement('BUTTON');
			clear_btn.className = 'btn btn-light btn-sm';
			clear_btn.appendChild(document.createTextNode('Clear'))
			clear_btn.onclick = function () { 
				fb_obj.clearFieldbook();
			};

			inner_div.appendChild(home_btn);
			inner_div.appendChild(back_btn);
			inner_div.appendChild(next_btn);
			inner_div.appendChild(save_btn);
		}
	}
	
	// add each of the divs to the page body
	addDivs(){
		var len = this.divArray.length
		for (var i = 0; i < len; i++){
			this.overlayDiv.appendChild(this.divArray[i]);
			this.divArray[i].style.display = "none";
		}
	}

	// pulls text box content saved in browser storage to ensure user doesn't lose their work
	updatePages(){
		var len = this.divArray.length
		for (var i = 0; i < len; i++){
			var textareaArray = this.divArray[i].getElementsByTagName('textarea');
			var arrlen = textareaArray.length;
			for (var k = 0; k < arrlen ; k++){
				textareaArray[k].value = localStorage.getItem('inner'+i+'textarea'+k);
			}
		}
	}

	setPage(number){
		// validate page number
		// var numPages = this.pagesArray.length;
		if (number > (this.numPages-1) || number < 0 || number === Fieldbook.pageNumber){
			return;
		}
		//hide and store active page
		if (Fieldbook.pageNumber !== -1){
			this.savePage();
			this.divArray[Fieldbook.pageNumber].style.display = 'none';
		}
		// setup new active page
		this.divArray[number].style.display = 'block';
		Fieldbook.pageNumber = number;
	}
	
	saveAndClose(){
		this.savePage();
		this.fieldbookOff();
	}
	
	fieldbookOn() {
		this.updatePages();
		this.overlayDiv.style.display = "block";
	}
	
	fieldbookOff(){
		this.overlayDiv.style.display = "none";
	}
	
	// Saves any textarea content from currently activate page into web storage
	savePage() {
		var textareaArray = this.divArray[Fieldbook.pageNumber].getElementsByTagName('textarea');
		var len = textareaArray.length;
		for ( var i = 0; i < len; i++){
			localStorage.setItem('inner'+Fieldbook.pageNumber+'textarea'+i, textareaArray[i].value);
		}
	}
	
	// dev method for clearing local storage
	clearFieldbook(){
	  localStorage.clear();
	}

	// helper method for creating text content
	static addSubtitle(parent, textcontent){
		var subtitle = document.createElement('p');
		subtitle.appendChild(document.createTextNode(textcontent));
		subtitle.className = 'fieldbook_textcontent';
		parent.appendChild(subtitle);
	}

	// helper method for creating text content with links
	static addLink(parent, textcontent, pagenum, fbObj){
		var link = document.createElement('p');
		link.appendChild(document.createTextNode(textcontent));
		link.className = 'fieldbook_link';
		link.onclick = function () { 
			fbObj.setPage(pagenum); 
		};
		link.onmouseover = function () {
			link.style = "color: #808A80;";
		}
		link.onmouseout = function() {
			link.style = "color: white;";
		}
		parent.appendChild(link);
	}

}

Fieldbook.pageNumber = -1;

export {Fieldbook}