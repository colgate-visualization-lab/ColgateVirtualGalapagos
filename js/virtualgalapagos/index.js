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
