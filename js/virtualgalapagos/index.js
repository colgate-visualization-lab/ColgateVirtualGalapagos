'use strict'
var link = 'https://www.colgate.edu'
var element = document.createElement('a')
element.setAttribute('href', link)
element.innerHTML = 'Colgate University'

var date = new Date()
var footer = document.getElementById('footer')
footer.innerText = 'Copyright \u00A9 ' + date.getFullYear() + ', '
footer.appendChild(element)

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

navbarScroll()
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
function navbarScroll () {
  var prevScrollpos = window.pageYOffset
  var navbar = document.getElementById('navbar')
  if (navbar === null) {
    return
  }
  var height = navbar.offsetHeight
  console.log(height)
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0'
    } else {
      navbar.style.top = '-' + height + 'px'
    }
    prevScrollpos = currentScrollPos
  }
}
