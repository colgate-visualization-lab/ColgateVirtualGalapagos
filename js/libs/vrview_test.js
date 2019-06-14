window.addEventListener('load', onVrViewLoad)

function onVrViewLoad () {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    video: '360/coral.jpg',
    is_stereo: false
  })
}
