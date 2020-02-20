import {NavigationBar} from '../navbar.js'

class HomepageNavigationBar extends NavigationBar {
    setupLink(){
        var link_dict = {
            "mysteries": "../index.html", "about": "about.html", 
            "help": "help.html", "gallery": "gallery.html",
            "map": "#", "summaries": "#", "database": "#"
        }

        for (var key in link_dict){
            var element = document.getElementById(key)
            element.href = link_dict[key]
        }

        var logo = document.getElementsByClassName('navbar-brand')[0]
        logo.href = "../index.html"
        var logo_img = document.getElementById('logo-img')
        logo_img.src = "../images/homepage/logo.png"
    }
}

export {HomepageNavigationBar}