'use strict'
var strokes

function saveToLocalStorage () {
  localStorage.setItem('canvas_strokes', JSON.stringify(strokes))
}

function paintCanvas () {
  var canvas
  var canvasElement
  var ctx
  var currentStroke = null
  var brush = {
    x: 0,
    y: 0,
    color: '#000000',
    size: 5,
    down: false
  }

  init()

  function resizeCanvasToDisplaySize () {
    // look up the size the canvas is being displayed
    var width = canvasElement.clientWidth
    var height = canvasElement.clientHeight

    // If the resolution does not match change it
    if (canvasElement.width !== width || canvasElement.height !== height) {
      canvasElement.width = width
      canvasElement.height = height
      return true
    }
    return false
  }

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
  function initButtons () {
    var rootElement = document.getElementById('draw')
    if (rootElement === null) {
      return
    }
    var canvas = document.createElement('CANVAS')
    canvas.setAttribute('id', 'drawCanvas')
    var container = document.createElement('DIV')

    var undoBtn = document.createElement('BUTTON')
    undoBtn.setAttribute('id', 'undo-btn')
    undoBtn.className = 'btn btn-light btn-sm'
    var icon = document.createElement('i')
    icon.className = 'material-icons'
    icon.innerHTML = 'undo'
    undoBtn.appendChild(icon)

    var exportBtn = document.createElement('BUTTON')
    exportBtn.setAttribute('id', 'export-btn')
    exportBtn.className = 'btn btn-light btn-sm'
    icon = document.createElement('i')
    icon.className = 'material-icons'
    icon.innerHTML = 'save_alt'
    exportBtn.appendChild(icon)

    var colorPalette = document.createElement('INPUT')
    colorPalette.setAttribute('id', 'color-picker')
    colorPalette.setAttribute('type', 'color')

    var brushSize = document.createElement('INPUT')
    brushSize.setAttribute('id', 'brush-size')
    brushSize.setAttribute('type', 'range')
    brushSize.setAttribute('min', '1')
    brushSize.setAttribute('max', '25')
    brushSize.className = 'slider'

    container.appendChild(undoBtn)
    container.appendChild(exportBtn)
    container.appendChild(colorPalette)
    container.appendChild(brushSize)
    rootElement.appendChild(container)
    rootElement.appendChild(canvas)
  }

  function init () {
    initButtons()
    canvas = $('#drawCanvas')
    canvasElement = document.getElementById('drawCanvas')
    if (canvasElement === null) {
      return
    }
    ctx = canvasElement.getContext('2d')

    function mouseEvent (e) {
      resizeCanvasToDisplaySize()
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
    var savedStrokes = localStorage.getItem('canvas_strokes')
    if (savedStrokes !== null && savedStrokes !== 'undefined') {
      strokes = JSON.parse(savedStrokes)
      redraw()
    } else {
      strokes = []
    }

    // buttons
    $('#export-btn').click(function () {
      var link = document.createElement('a')
      link.href = canvasElement.toDataURL()
      link.download = 'canvas.png'
      document.body.appendChild(link)
      link.click()
    })
    $('#undo-btn').click(function () {
      strokes.pop()
      redraw()
    })
    $('#clear-btn').click(function () { // not implemented
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
    canvasElement.addEventListener('touchstart', function (e) {
      var touch = e.touches[0]
      var mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      canvasElement.dispatchEvent(mouseEvent)
    }, false)

    canvasElement.addEventListener('touchend', function (e) {
      var touch = e.changedTouches[0]
      var mouseEvent = new MouseEvent('mouseup', {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      canvasElement.dispatchEvent(mouseEvent)
    }, false)

    canvasElement.addEventListener('touchmove', function (e) {
      var touch = e.touches[0]
      var mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      canvasElement.dispatchEvent(mouseEvent)
    }, false)

    // Prevent scrolling on touch event
    document.body.addEventListener('touchstart', function (e) {
      if (e.target === canvasElement) {
        e.preventDefault()
      }
    }, false)
    document.body.addEventListener('touchend', function (e) {
      if (e.target === canvasElement) {
        e.preventDefault()
      }
    }, false)
    document.body.addEventListener('touchmove', function (e) {
      if (e.target === canvasElement) {
        e.preventDefault()
      }
    }, false)
  }
}
$(paintCanvas)

export { paintCanvas, saveToLocalStorage as saveCanvas }
