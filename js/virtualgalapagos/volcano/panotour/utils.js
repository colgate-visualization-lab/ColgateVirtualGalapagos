'use strict'

function readDeviceOrientation () {
  // window.innerHeight is not supported by IE
  var winH = window.innerHeight ? window.innerHeight : jQuery(window).height()
  //  var winW = window.innerWidth ? window.innerWidth : jQuery(window).width()
  // force height for iframe usage
  if (!winH || winH === 0) {
    winH = '100%'
  }
  // set the height of the document
  jQuery('html').css('height', winH)
  // scroll to top
  window.scrollTo(0, 0)
}

jQuery(document).ready(function () {
  if (/(iphone|ipod|ipad|android|iemobile|webos|fennec|blackberry|kindle|series60|playbook|opera\smini|opera\smobi|opera\stablet|symbianos|palmsource|palmos|blazer|windows\sce|windows\sphone|wp7|bolt|doris|dorothy|gobrowser|iris|maemo|minimo|netfront|semc-browser|skyfire|teashark|teleca|uzardweb|avantgo|docomo|kddi|ddipocket|polaris|eudoraweb|opwv|plink|plucker|pie|xiino|benq|playbook|bb|cricket|dell|bb10|nintendo|up.browser|playstation|tear|mib|obigo|midp|mobile|tablet)/.test(navigator.userAgent.toLowerCase())) {
    if (/iphone/.test(navigator.userAgent.toLowerCase()) && window.self === window.top) {
      jQuery('body').css('height', '100.18%')
    }
    // add event listener on resize event (for orientation change)
    if (window.addEventListener) {
      window.addEventListener('load', readDeviceOrientation)
      window.addEventListener('resize', readDeviceOrientation)
      window.addEventListener('orientationchange', readDeviceOrientation)
    }
    // initial execution
    setTimeout(function () { readDeviceOrientation() }, 10)
  }
})
