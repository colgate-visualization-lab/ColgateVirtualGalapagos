var btn = document.createElement('BUTTON')
btn.className = 'btn btn-dark'
btn.style = 'margin-left: 5px;'
btn.onclick = function () {
    window.history.back();
}
icon = document.createElement('i')
icon.className = 'material-icons'
icon.innerHTML = 'arrow_back'
btn.appendChild(icon)
this.nextBtn = btn
document.getElementById('nav_control').appendChild(this.nextBtn)