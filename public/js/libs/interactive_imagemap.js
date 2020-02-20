var resizeEvt;

(function ($) {
  $(document).on('ready.usemaps', function () {
    $('img[usemap]').maphilight()
    $('img[usemap]').rwdImageMaps()
  })

  $(window).on('resize.usemaps', function () {
    clearTimeout(resizeEvt)
    resizeEvt = setTimeout(function () {
      $('img[usemap]').maphilight()
    }, 200)
  })
})(jQuery)
