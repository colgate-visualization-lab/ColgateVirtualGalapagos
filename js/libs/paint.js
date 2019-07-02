var canvas
var ctx
var brush = {
  x: 0,
  y: 0,
  color: '#000000',
  size: 5,
  down: false
}
var strokes = []
var currentStroke = null
function redraw () {
  ctx.clearRect(0, 0, canvas.width(), canvas.height())
  ctx.lineCap = 'round'

  for (var i = 0; i < strokes.length; i++) {
    var s = strokes[i]
    ctx.strokeStyle = s.color
    ctx.lineWidth = s.size
    ctx.beginPath()
    ctx.moveTo(s.points[0].x, s.points[0].y)
    for (var j = 0; j < s.points.length; j++) {
      var p = s.points[j]
      ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()
  }
}

function init () {
  canvas = $('#draw')
  canvas.attr({
    width: window.innerWidth,
    height: window.innerHeight
  })
  ctx = canvas[0].getContext('2d')

  function mouseEvent (e) {
    brush.x = e.offsetX
    brush.y = e.offsetY

    currentStroke.points.push({
      x: brush.x,
      y: brush.y

    })

    redraw()
  }
  canvas.mousedown(function (e) {
    brush.down = true

    currentStroke = {
      color: brush.color,
      size: brush.size,
      points: []
    }
    strokes.push(currentStroke)

    mouseEvent(e)
  }).mouseup(function (e) {
    brush.down = false

    mouseEvent(e)

    currentStroke = null
  }).mousemove(function (e) {
    if (brush.down) { mouseEvent(e) }
  })

  // check if localstorage has an array of strokes saved
  if (localStorage.getItem('canvas_strokes')) {
    strokes = JSON.parse(localStorage.getItem('canvas_strokes'))
    redraw()
  }

  // buttons
  $('#save-to-local-storage').click(function () {
    localStorage.setItem('canvas_strokes', JSON.stringify(strokes))
  })
  $('#save-btn').click(function () {
    window.open(canvas[0].toDataURL())
  })
  $('#undo-btn').click(function () {
    strokes.pop()
    redraw()
  })
  $('#clear-btn').click(function () {
    strokes = []
    redraw()
  })

  $('#color-picker').on('input', function () {
    brush.color = this.value
  })
  $('#brush-size').on('input', function () {
    brush.size = this.value
  })

  // bind touch actions
  canvas[0].addEventListener('touchstart', function (e) {
    // mousePos = getTouchPos(canvas, e)
    // brush.x = mousePos.x
    // brush.x = 3
    var touch = e.touches[0]
    var mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY
    })
    canvas[0].dispatchEvent(mouseEvent)
  }, false)

  canvas[0].addEventListener('touchend', function (e) {
    var touch = e.changedTouches[0]
    var mouseEvent = new MouseEvent('mouseup', {
      clientX: touch.clientX,
      clientY: touch.clientY
    })
    canvas[0].dispatchEvent(mouseEvent)
  }, false)

  canvas[0].addEventListener('touchmove', function (e) {
    var touch = e.touches[0]
    var mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY
    })
    canvas[0].dispatchEvent(mouseEvent)
  }, false)

  // Prevent scrolling on touch event
  // Prevent scrolling when touching the canvas
  document.body.addEventListener('touchstart', function (e) {
    if (e.target === canvas[0]) {
      e.preventDefault()
    }
  }, false)
  document.body.addEventListener('touchend', function (e) {
    if (e.target === canvas[0]) {
      e.preventDefault()
    }
  }, false)
  document.body.addEventListener('touchmove', function (e) {
    if (e.target === canvas[0]) {
      e.preventDefault()
    }
  }, false)
}
$(init)
