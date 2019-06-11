'use strict'
// adds a sidebar nav to move easily within a module
// needs completion to add links for each module that extends it.
// TODO: disable links not yet unlocked within a module
// Visibility  controlled in Volcano.css
class Toolbar {
  constructor () {
    if (!new.target) {
      return new Toolbar()
    }
    this.bar_on = false
  }

  initToolbar () {
    // debugger
    var obj = this
    // find FB button in virtualgalapagos layout
    document.getElementById('tb_button').onclick = function () {
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
    Toolbar.addLink(sidenav, 'Link 1')
    Toolbar.addLink(sidenav, 'Link 2')
    Toolbar.addLink(sidenav, 'Link 3')

    document.body.appendChild(sidenav)
  }

  // helper function to add text content with link
  static addLink (parent, text) {
    var link = document.createElement('a')
    link.appendChild(document.createTextNode(text))
    link.style = 'color: white;'
    parent.appendChild(link)
  }
}
export { Toolbar }
