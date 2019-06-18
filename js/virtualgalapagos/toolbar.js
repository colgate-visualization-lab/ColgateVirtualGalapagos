'use strict'
// adds a sidebar nav to move easily within a module
// needs completion to add links for each module that extends it.
// TODO: disable links not yet unlocked within a module
// Visibility  controlled in Volcano.css
class Toolbar {
  constructor (links, mastercontroller) {
    if (!new.target) {
      return new Toolbar()
    }
    this.bar_on = false
    this.links = links
    this.mastercontroller = mastercontroller
  }

  initToolbar () {
    // debugger
    var obj = this
    // find FB button in virtualgalapagos layout\
    var toolbarBtn = document.getElementById('tb_button')
    if (this.mastercontroller.dev_mode) {
      toolbarBtn.style.display = 'flex'
    }
    toolbarBtn.onclick = function () {
      obj.toggleTB()
    }
    // setup layout elements for toolbar sidebar
    this.setupSideBar()
  }

  toggleTB () {
    if (this.bar_on) {
      this.closeNav()
    } else {
      this.openNav()
    }
    this.bar_on = !this.bar_on
  }

  /* Set the width of the side navigation to 250px */
  openNav () {
    document.getElementById('sidenav').style.width = '250px'
  }

  /* Set the width of the side navigation to 0 */
  closeNav () {
    document.getElementById('sidenav').style.width = '0'
  }

  setupSideBar () {
    var sidenav = document.createElement('div')
    sidenav.id = 'sidenav'
    sidenav.className = 'sidenav'

    // create header
    var header = document.createElement('h1')
    header.style = 'color: white; padding: 32px 8px 8px 32px;'
    header.appendChild(document.createTextNode('TOOLBAR'))
    sidenav.appendChild(header)

    // create links
    var length = this.links.length
    for (var i = 0; i < length; i++) {
      Toolbar.addLink(this.links[i], sidenav)
    }

    document.body.appendChild(sidenav)
  }

  // helper function to add text content with link
  static addLink (obj, parent) {
    var link = document.createElement('a')
    link.appendChild(document.createTextNode(obj.text))
    link.setAttribute('href', obj.url)
    link.style = 'color: white;'
    parent.appendChild(link)
  }
}
export { Toolbar }
