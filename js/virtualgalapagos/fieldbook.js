'use strict'
//
// How to use this module
// HTML page must use the layout template
// must include the following "import {Fieldbook} from 'FILEPATH/fieldbook.js';" in the module's fieldbook controller
// the subclass must override updatePages method
//
// call init, updatePages, start methods
//

import { MasterController } from './mastercontroller.js'
import { saveCanvas } from '../libs/paint.js'

class Fieldbook {
  constructor (pages, numPages, mastercontroller) {
    if (!(mastercontroller instanceof MasterController)) {
      throw new Error('MasterController must be instantiated')
    }
    if (!new.target) {
      return new Fieldbook()
    }
    this.mastercontroller = mastercontroller
    this.divArray = []
    this.pagesArray = pages
    this.numPages = numPages
    this.innerDiv = null
    this.overlayDiv = null
    this.fbOn = false
  }

  init () {
    this.setUp()
    this.createDivs()
    var clearBtn = document.getElementById('clear_fb_button')
    if (this.mastercontroller.dev_mode) {
      clearBtn.style.display = 'flex'
    }
    clearBtn.onclick = function () {
      Fieldbook.clearFieldbook()
    }
  }

  populateDivs () {
    throw new Error('Must override this method in the submodule')
    // over ride this method for each submodule
  }
  // supply the fb_page num used by the current page
  start (currentPage) {
    this.createNavBars()
    this.addDivs()
    this.updatePages()
    this.setPage(currentPage)
  }

  setUp () {
    var fbObj = this
    this.overlayDiv = document.createElement('div')
    this.overlayDiv.id = 'fb_overlay'
    document.body.append(this.overlayDiv)
    document.getElementById('fb_button').onclick = function () { // persistent fieldbook button
      fbObj.toggleFB()
    }
  }

  // toggle Fieldbook on and off
  toggleFB () {
    if (this.fbOn) {
      this.saveAndClose()
    } else {
      this.fieldbookOn()
    }
    this.fbOn = !this.fbOn
  }

  createDivs () {
    // var numPages = this.numPages;
    for (var i = 0; i < this.numPages; i++) {
      var innerDiv = document.createElement('div')
      innerDiv.id = 'fb_overlay_inner'
      this.divArray.push(innerDiv)
    }
  }

  // create the (mostly) identical navigational buttons for each fb page
  createNavBars () {
    var fbObj = this
    var len = this.divArray.length
    for (var i = 0; i < len; i++) {
      var innerDiv = this.divArray[i]
      var saveBtn = document.createElement('BUTTON')
      saveBtn.className = 'btn btn-light btn-sm'
      var icon = document.createElement('i')
      icon.className = 'material-icons'
      icon.innerHTML = 'close'
      saveBtn.appendChild(icon)
      saveBtn.onclick = function () {
        fbObj.toggleFB()
      }

      var backBtn = document.createElement('BUTTON')
      backBtn.className = 'btn btn-light btn-sm'
      icon = document.createElement('i')
      icon.className = 'material-icons'
      icon.innerHTML = 'arrow_back_ios'
      backBtn.appendChild(icon)
      backBtn.onclick = function () {
        fbObj.setPage(Fieldbook.pageNumber - 1)
      }

      var nextBtn = document.createElement('BUTTON')
      nextBtn.className = 'btn btn-light btn-sm'
      icon = document.createElement('i')
      icon.className = 'material-icons'
      icon.innerHTML = 'arrow_forward_ios'
      nextBtn.appendChild(icon)
      nextBtn.onclick = function () {
        fbObj.setPage(Fieldbook.pageNumber + 1)
      }

      var homeBtn = document.createElement('BUTTON')
      homeBtn.className = 'btn btn-light btn-sm'
      icon = document.createElement('i')
      icon.className = 'material-icons'
      icon.innerHTML = 'subdirectory_arrow_left'
      homeBtn.appendChild(icon)
      homeBtn.onclick = function () {
        fbObj.setPage(0)
      }

      var clearBtn = document.createElement('BUTTON')
      clearBtn.className = 'btn btn-light btn-sm'
      clearBtn.appendChild(document.createTextNode('Clear'))
      clearBtn.onclick = function () {
        fbObj.clearFieldbook()
      }

      if (i !== 0) {
        innerDiv.appendChild(homeBtn)
        if (i !== 1) { innerDiv.appendChild(backBtn) }
        if (i !== len - 1) { innerDiv.appendChild(nextBtn) }
      }
      innerDiv.appendChild(saveBtn)
    }
  }

  // add each of the divs to the page body
  addDivs () {
    var len = this.divArray.length
    for (var i = 0; i < len; i++) {
      this.overlayDiv.appendChild(this.divArray[i])
      this.divArray[i].style.display = 'none'
    }
  }

  // pulls text box content saved in browser storage to ensure user doesn't lose their work
  updatePages () {
    var len = this.divArray.length
    for (var i = 0; i < len; i++) {
      var textareaArray = this.divArray[i].getElementsByTagName('textarea')
      var arrlen = textareaArray.length
      for (var k = 0; k < arrlen; k++) {
        textareaArray[k].value = MasterController.getItem('inner' + i + 'textarea' + k)
      }
    }
  }

  setPage (number) {
    // validate page number
    // var numPages = this.pagesArray.length;
    if (number > (this.numPages - 1) || number < 0 || number === Fieldbook.pageNumber) {
      return
    }
    // hide and store active page
    if (Fieldbook.pageNumber !== -1) {
      this.savePage()
      this.divArray[Fieldbook.pageNumber].style.display = 'none'
    }
    // setup new active page
    this.divArray[number].style.display = 'block'
    Fieldbook.pageNumber = number
  }

  saveAndClose () {
    this.savePage()
    this.fieldbookOff()
  }

  fieldbookOn () {
    this.updatePages()
    var bcCanvas = document.getElementById('bcPaintCanvas')
    if (bcCanvas !== null) {
      // Todo : Calculate the height of the canvas from the parent
      var margin = 20
      bcCanvas.setAttribute('width', '600px')
      bcCanvas.setAttribute('height', '300px')
      bcCanvas.style.marginLeft = margin + 'px'
      bcCanvas.style.marginTop = margin + 'px'
    }
    this.overlayDiv.style.display = 'block'
  }

  fieldbookOff () {
    this.overlayDiv.style.display = 'none'
  }

  // Saves any content from currently activate page into web storage
  savePage () {
    var textareaArray = this.divArray[Fieldbook.pageNumber].getElementsByTagName('textarea')
    var len = textareaArray.length
    for (var i = 0; i < len; i++) {
      MasterController.storeItem('inner' + Fieldbook.pageNumber + 'textarea' + i, textareaArray[i].value)
    }
    var canvas = document.getElementById('draw')
    if (canvas !== null) {
      saveCanvas()
    }
  }

  // helper method for creating text content
  static addSubtitle (parent, textcontent) {
    var subtitle = document.createElement('p')
    subtitle.appendChild(document.createTextNode(textcontent))
    subtitle.className = 'fieldbook_textcontent'
    parent.appendChild(subtitle)
  }

  // helper method for creating text content with links
  static addLink (parent, textcontent, pagenum, fbObj) {
    var link = document.createElement('p')
    link.appendChild(document.createTextNode(textcontent))
    link.className = 'fieldbook_link'
    link.onclick = function () {
      fbObj.setPage(pagenum)
    }
    link.onmouseover = function () {
      link.style = 'color: #808A80;'
    }
    link.onmouseout = function () {
      link.style = 'color: white;'
    }
    parent.appendChild(link)
  }

  static clearFieldbook () {
    MasterController.clearStorage()
  }
}

Fieldbook.pageNumber = -1

export { Fieldbook }
