'use strict'

class NavigationBar {
    constructor(){
        this.topnav = document.getElementById('topnav-container')
        this.side_bar = document.getElementById("sidebar")
    }

    init(){
        this.setupTopNavButton()
        this.setupLogo()
        this.setupTopNavContent()
        this.setupSideBarHeader()
        this.setupSideNavContent()
        this.setupSettingButton()
    }

    setupTopNavButton(){
        //Create button to toggle side navigation 
        var sidebar_button = document.createElement('button')
        sidebar_button.id = "sidebarCollapse"
        sidebar_button.className = "btn btn-info active"
        sidebar_button.setAttribute('type', "button")
        var icon = document.createElement('i')
        icon.className = "fas fa-align-left"
        sidebar_button.appendChild(icon)
        var btn_title = document.createElement('span')
        btn_title.innerHTML = "Backpack"
        sidebar_button.appendChild(icon)
        sidebar_button.appendChild(btn_title)


        //Button for topnav content when screen size is small
        var topnav_btn = document.createElement('button')
        topnav_btn.className = "btn btn-dark d-inline-block d-lg-none ml-auto" 
        NavigationBar.addMultipleAttributes(topnav_btn, {'type': "button", 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': "Toggle navigation"})
        var topnav_icon = document.createElement('i')
        topnav_icon.className = "fas fa-align-justify"
        topnav_btn.appendChild(topnav_icon)
        topnav_btn.id = "topnav-btn"

        this.topnav.appendChild(sidebar_button)
        this.topnav.appendChild(topnav_btn)
    }

    setupLogo(){
        var logo = document.createElement('a')
        logo.className = "navbar-brand"
        var img = document.createElement('img')
        img.id = "logo-img" 
        img.alt = "Logo"
        logo.appendChild(img)
        var topnav_btn = document.getElementById('topnav-btn')
        this.topnav.insertBefore(logo, topnav_btn)
    }

    setupTopNavContent(){
        var nav_content = document.getElementById("navbarSupportedContent")
        var content_list = document.createElement('ul')
        content_list.className = "nav navbar-nav ml-auto"
        var id_map = {"Mysteries": "mysteries", "About": "about", "Help": "help", "Gallery": "gallery"}
        for (var key in id_map){
            var element = document.createElement('li')
            element.className = "nav-item"
            var link = document.createElement('a')
            link.className = "nav-link"
            link.id = id_map[key]
            link.innerHTML = key
            element.appendChild(link)
            content_list.appendChild(element)
        }
        nav_content.appendChild(content_list)
        this.topnav.appendChild(nav_content)
    }

    setupSideBarHeader(){
        var sidebar_header = document.createElement("div")
        sidebar_header.classList.add("sidebar-header")
        var header_content = document.createElement("h3")
        header_content.innerHTML = "Backpack"
        sidebar_header.appendChild(header_content)
        this.side_bar.appendChild(sidebar_header)
    }

    setupSideNavContent(){
        //Add sidenav content
        var sidenav_content = {"Field Book": "field-book-link", "Map": "map", "Summaries": "summaries", "Database": "database"}
        this.side_bar.appendChild(NavigationBar.createList(sidenav_content, "sidenav-content", "list-unstyled components"))

        //Add fieldbook content
        var fieldbook = document.getElementById('field-book-link')
        NavigationBar.addMultipleAttributes(fieldbook, {"href":"#fieldbook", "data-toggle":"collapse", "aria-expanded":"false", "class":"dropdown-toggle"})
        var field_book_content = {"Iguana Mystery": "mystery1", "Mystery 2": "mystery2", "Mystery 3": "mystery3"}
        fieldbook.parentNode.appendChild(NavigationBar.createList(field_book_content, "fieldbook", "collapse list-unstyled"))

        //Add content to Iguana Mystery
        var iguana_mystery = document.getElementById('mystery1')
        NavigationBar.addMultipleAttributes(iguana_mystery, {"href":"#iguana-modules", "data-toggle":"collapse", "aria-expanded":"false", "class":"dropdown-toggle"})
        var iguana_mystery_content = {"Volcano": "volcano", "Iguana": "iguana", "Island Life Cycle": "islandlife", "Currents": "currents"}
        iguana_mystery.parentNode.appendChild(NavigationBar.createList(iguana_mystery_content, 'iguana-modules', "collapse list-unstyled"))

    }

    setupSettingButton(){ 
        var buttons = document.createElement("ul")
        buttons.className = "list-unstyled CTAs"
        var setting_btn = document.createElement("li")
        var setting_link = document.createElement("a")
        setting_link.href = "#"
        setting_link.id = "setting"
        setting_link.innerHTML = "Settings"
        setting_btn.appendChild(setting_link)
        buttons.appendChild(setting_btn)
        return buttons
    }

    //Need to be overridden  
    setupLink(){}

    //Helper method to create an unordered list 
    static createList(id_map, id, class_name){
        var content_list = document.createElement('ul')
        content_list.className = class_name
        content_list.id = id
        for (var key in id_map){
            var element = document.createElement('li')
            var a_tag = document.createElement('a')
            a_tag.innerHTML = key
            a_tag.id = id_map[key]
            element.appendChild(a_tag)
            content_list.appendChild(element)
        }
        return content_list
    }

    //Helper method to add multiple attributes to an element
    static addMultipleAttributes(element, attr_dict){
        for (var key in attr_dict){
            element.setAttribute(key, attr_dict[key])
        }
    }
}

export {NavigationBar}

