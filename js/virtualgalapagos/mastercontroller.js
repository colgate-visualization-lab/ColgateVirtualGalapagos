"use strict"

class MasterController {
  constructor(pageList, pageName) {
    if (!new.target) {
      return new MasterController();
    }
    this.dev_mode = true;
    this.pageList = pageList;
    this.pageName = pageName;
    this.next_btn;
    this.done_flags = [];
    this.idx;
    if (this.pageList.includes(pageName)) {
      this.setupControlBar();
    }
    else {
      this.next_btn = document.getElementById("next_btn");
      this.updateNext();
    }
    //  dev mode
    if (this.dev_mode) {
      this.pageDone();
    }
  }

  init() {
      if (localStorage.getItem("initProgress") != "true") {
        alert("DEV MESSAGE PLEASE IGNORE - Setting up progress storage.");
        for (var i = 0; i < this.pageList.length; i++) {
          localStorage.setItem(this.pageList[i], "false");
        }
        // special cases
        localStorage.setItem("TerrainMap03", "false");
        localStorage.setItem("PlumePlacement01", "false");
        localStorage.setItem("initProgress", "true");
      }
    }

    // create back and next buttons
  setupControlBar() {
    var controllerObj = this;
    this.idx = this.pageList.indexOf(this.pageName);
    // first page doesn't need back button
    if (this.idx > 0) {
      var back_btn = document.createElement('BUTTON');
      back_btn.className = 'btn btn-dark';
      back_btn.onclick = function () {
        MasterController.back(controllerObj);
      };
      var icon = document.createElement("i");
      icon.className = "material-icons";
      icon.innerHTML = "arrow_back";
      back_btn.appendChild(icon);
      document.getElementById("nav_control").appendChild(back_btn);
    }
    // last page doesn't need next button
    if (this.idx < this.pageList.length - 1) {
      var btn = document.createElement('BUTTON');
      btn.className = 'btn btn-dark';
      btn.style = "margin-left: 5px;";
      // Button disabled until user done with page
      if (localStorage.getItem(this.pageName) == "false" && !this.dev_mode) {
        btn.disabled = true;
      }
      btn.onclick = function () {
        MasterController.next(controllerObj);
      };
      var icon = document.createElement("i");
      icon.className = "material-icons";
      icon.innerHTML = "arrow_forward";
      btn.appendChild(icon);
      this.next_btn = btn;
      document.getElementById("nav_control").appendChild(this.next_btn);
    }
  }
  updateNext() {
    if (localStorage.getItem(this.pageName) != "true" && !this.dev_mode) {
      this.next_btn.disabled = true;
    }
  }
  // go to next page
  static next(controllerObj) {
    MasterController.movePage(1,controllerObj);
  }
  // go to previous page
  static back(controllerObj) {
    MasterController.movePage(-1,controllerObj);
  }
  static movePage(shift, controllerObj) {
    window.location.href = "/" + document.location.pathname.split("/").splice(1)[0] + "/" + controllerObj.pageList[controllerObj.idx + shift] + ".html";
  }
  //
  addFlag(name) {
    this.done_flags[name] = false;
    console.log("Adding flag of type: " + name);
  }

  flagDone(name) {
    console.log("Flag of type: " + name + " done");
    this.done_flags[name] = true;
    var keys = Object.keys(this.done_flags);
    for (var i = 0; i < keys.length; i++) {
      if (this.done_flags[keys[i]] == false) {
        return;
      }
    }
    this.pageDone();
  }

  pageDone() {
    if (this.idx < this.pageList.length - 1) {
      this.next_btn.disabled = false;
      localStorage.setItem(this.pageName, "true");
    }
  }
}
export{MasterController};