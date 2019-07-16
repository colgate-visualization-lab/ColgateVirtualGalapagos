'use strict'

function init () {
  function locationHashChanged () {
    $(location.hash).tab('show')
  }

  window.onhashchange = locationHashChanged
  // location.reload(true)

  var moduleMappings = {
    'volcano': 'volcano/Volcano_TerrainMap01.html',
    'iguana': 'iguana/panotour/Iguana_Endemic01.html'
  }

  function getLinks (modules) {
    var links = []
    modules.forEach(element => {
      links.push({ text: element, url: moduleMappings[element] })
    })
    return links
  }

  function getModules (mystery) {
    var modules
    switch (mystery) {
      case 'mystery1':
        modules = ['volcano', 'iguana']
        break
      case 'mystery2':
        modules = ['volcano']
        break
      default:
        modules = []
    }
    return modules
  }

  function createLinks (mystery) {
    var modules = getModules(mystery)
    var links = getLinks(modules)
    var sidenav = document.getElementById('sidenav')
    var length = links.length
    for (var i = 0; i < length; i++) {
      addLink(links[i], sidenav)
    }

    document.body.appendChild(sidenav)
  }

  function addLink (obj, parent) {
    var link = document.createElement('a')
    link.appendChild(document.createTextNode(obj.text))
    link.setAttribute('href', obj.url)
    link.style = 'color: white;'
    parent.appendChild(link)
  }

  /* Set the width of the side navigation to 250px */
  function openNav () {
    document.getElementById('sidenav').style.width = '250px'
  }

  /* Set the width of the side navigation to 0 */
  function closeNav () {
    document.getElementById('sidenav').style.width = '0'
  }

  document.getElementById('closebtn').onclick = function () {
    closeNav()
  }

  document.getElementById('mystery1').onclick = function () {
    createLinks('mystery1')
    // debugger
    openNav()
  }
}
$(init)
