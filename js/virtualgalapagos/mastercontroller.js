'use strict'

class MasterController {
  constructor (pageList, pageName, moduleName) {
    if (!new.target) {
      return new MasterController()
    }
    this.dev_mode = true
    this.pageList = pageList
    this.pageName = pageName
    this.nextBtn = null
    this.done_flags = []
    this.idx = -1
    this.pageName = pageName
    this.moduleName = moduleName

    if (this.pageList.includes(this.pageName)) {
      this.setupControlBar()
    } else {
      this.nextBtn = document.getElementById('nextBtn')
      this.updateNext()
    }
    //  dev mode
    if (this.dev_mode) {
      this.pageDone()
    }
  }

  init () {
    if (MasterController.getItem('initProgress') !== 'true') {
      if (this.dev_mode) {
        alert('Setting up progress storage.')
      }
      for (var i = 0; i < this.pageList.length; i++) {
        MasterController.storeItem(this.pageList[i], 'false')
      }
    }
  }

  // create back and next buttons
  setupControlBar () {
    var controllerObj = this
    this.idx = this.pageList.indexOf(this.pageName)
    // first page doesn't need back button
    if (this.idx > 0) {
      var backBtn = document.createElement('BUTTON')
      backBtn.className = 'btn btn-dark'
      backBtn.onclick = function () {
        MasterController.back(controllerObj)
      }
      var icon = document.createElement('i')
      icon.className = 'material-icons'
      icon.innerHTML = 'arrow_back'
      backBtn.appendChild(icon)
      document.getElementById('nav_control').appendChild(backBtn)
    }
    // last page doesn't need next button
    if (this.idx < this.pageList.length - 1) {
      var btn = document.createElement('BUTTON')
      btn.className = 'btn btn-dark'
      btn.style = 'margin-left: 5px;'
      // Button disabled until user done with page
      if (MasterController.getItem(this.pageName) === 'false' && !this.dev_mode) {
        btn.disabled = true
      }
      btn.onclick = function () {
        MasterController.next(controllerObj)
      }
      icon = document.createElement('i')
      icon.className = 'material-icons'
      icon.innerHTML = 'arrow_forward'
      btn.appendChild(icon)
      this.nextBtn = btn
      document.getElementById('nav_control').appendChild(this.nextBtn)
    }
  }
  updateNext () {
    if (MasterController.getItem(this.pageName) !== 'true' && !this.dev_mode) {
      this.nextBtn.disabled = true
    }
  }
  // go to next page
  static next (controllerObj) {
    MasterController.movePage(1, controllerObj)
  }
  // go to previous page
  static back (controllerObj) {
    MasterController.movePage(-1, controllerObj)
  }
  static movePage (shift, controllerObj) {
    window.location.href = '/' + document.location.pathname.split('/').splice(1)[0] + '/' + controllerObj.pageList[controllerObj.idx + shift] + '.html'
  }
  //
  addFlag (name) {
    this.done_flags[name] = false
    console.log('Adding flag of type: ' + name)
  }

  flagDone (name) {
    console.log('Flag of type: ' + name + ' done')
    this.done_flags[name] = true
    var keys = Object.keys(this.done_flags)
    for (var i = 0; i < keys.length; i++) {
      if (this.done_flags[keys[i]] === false) {
        return
      }
    }
    this.pageDone()
  }

  pageDone () {
    if (this.idx < this.pageList.length - 1) {
      this.nextBtn.disabled = false
      MasterController.storeItem(this.pageName, 'true')
    }
  }

  // api to persist items in storage, can be expanded to use a database etc
  static storeItem (key, value) {
    localStorage.setItem(key, value)
  }
  static getItem (key) {
    return localStorage.getItem(key)
  }

  static clearStorage () {
    alert('Cleared storage')
    localStorage.clear()
  }
}
export { MasterController }
