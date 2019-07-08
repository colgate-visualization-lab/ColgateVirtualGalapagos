'use strict'

class CustomCanvas {
  constructor () {
    // this.strokes
    this.canvas = $('#draw')
    this.ctx = this.canvas[0].getContext('2d')
    this.currentStroke = null
    this.brush = {
      x: 0,
      y: 0,
      color: '#000000',
      size: 5,
      down: false
    }
    var savedStrokes = localStorage.getItem('canvas_strokes')
    if (savedStrokes !== undefined) {
      this.strokes = JSON.parse(savedStrokes)
    } else {
      this.strokes = []
    }
    this.redraw()
  }

  redraw () {
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height())
    this.ctx.lineCap = 'round'

    for (var i = 0; i < this.strokes.length; i++) {
      var s = this.strokes[i]
      this.ctx.strokeStyle = s.color
      this.ctx.lineWidth = s.size
      this.ctx.beginPath()
      this.ctx.moveTo(s.points[0].x, s.points[0].y)
      for (var j = 0; j < s.points.length; j++) {
        var p = s.points[j]
        this.ctx.lineTo(p.x, p.y)
      }
      this.ctx.stroke()
    }
  }

  resizeCanvasToDisplaySize () {
  // look up the size the this.canvas is being displayed
    var width = this.canvas.clientWidth
    var height = this.canvas.clientHeight

    // If the resolution does not match change it
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width
      this.canvas.height = height
      return true
    }

    return false
  }

  savePage () {
    localStorage.setItem('canvas_strokes', JSON.stringify(this.strokes))
  }

  init () {
    var object = this
    function mouseEvent (e) {
      object.resizeCanvasToDisplaySize(object.canvas[0])
      object.brush.x = e.offsetX
      object.brush.y = e.offsetY

      object.currentStroke.points.push({
        x: object.brush.x,
        y: object.brush.y

      })

      object.redraw()
    }
    object.canvas.mousedown(function (e) {
      object.brush.down = true

      object.currentStroke = {
        color: object.brush.color,
        size: object.brush.size,
        points: []
      }
      object.strokes.push(object.currentStroke)

      mouseEvent(e)
    }).mouseup(function (e) {
      object.brush.down = false

      mouseEvent(e)

      object.currentStroke = null
    }).mousemove(function (e) {
      if (object.brush.down) { mouseEvent(e) }
    })

    // check if localstorage has an array of this.strokes saved

    // buttons
    $('#save-to-local-storage').click(function () {
      this.saveToLocalStorage()
    })
    $('#save-btn').click(function () {
      window.open(this.canvas[0].toDataURL())
    })
    $('#undo-btn').click(function () {
      this.strokes.pop()
      this.redraw()
    })
    $('#clear-btn').click(function () {
      this.strokes = []
      this.redraw()
    })

    $('#color-picker').on('input', function () {
      this.brush.color = this.value
    })
    $('#brush-size').on('input', function () {
      this.brush.size = this.value
    })

    // bind touch actions
    this.canvas[0].addEventListener('touchstart', function (e) {
      var touch = e.touches[0]
      var mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      this.canvas[0].dispatchEvent(mouseEvent)
    }, false)

    this.canvas[0].addEventListener('touchend', function (e) {
      var touch = e.changedTouches[0]
      var mouseEvent = new MouseEvent('mouseup', {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      this.canvas[0].dispatchEvent(mouseEvent)
    }, false)

    this.canvas[0].addEventListener('touchmove', function (e) {
      var touch = e.touches[0]
      var mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
      })
      this.canvas[0].dispatchEvent(mouseEvent)
    }, false)

    // Prevent scrolling on touch event
    document.body.addEventListener('touchstart', function (e) {
      if (e.target === this.canvas[0]) {
        e.preventDefault()
      }
    }, false)
    document.body.addEventListener('touchend', function (e) {
      if (e.target === this.canvas[0]) {
        e.preventDefault()
      }
    }, false)
    document.body.addEventListener('touchmove', function (e) {
      if (e.target === this.canvas[0]) {
        e.preventDefault()
      }
    }, false)
    // resizethis.CanvasToDisplaySize(this.canvas[0])
  }
}

export { CustomCanvas }
