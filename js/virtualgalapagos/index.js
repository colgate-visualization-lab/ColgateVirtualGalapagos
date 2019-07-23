'use strict'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b0fffbcc632b6193614c522f6d86f5477a25cb2c
=======
>>>>>>> b0fffbcc632b6193614c522f6d86f5477a25cb2c
var link = "https://www.colgate.edu"
var element = document.createElement('a')
element.setAttribute('href', link)
element.innerHTML = 'Colgate University'

var date = new Date
var footer = document.getElementById('footer')
footer.innerText = 'Copyright \u00A9 ' + date.getFullYear() + ', '
footer.appendChild(element)

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
<<<<<<< HEAD
<<<<<<< HEAD
});
=======

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
>>>>>>> a0673d39dc331429655995817ccd9f9e83c187fc
=======
});
>>>>>>> b0fffbcc632b6193614c522f6d86f5477a25cb2c
=======
});
>>>>>>> b0fffbcc632b6193614c522f6d86f5477a25cb2c
