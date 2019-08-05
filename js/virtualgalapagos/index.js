'use strict'

class NavigationBar {
    constructor(){}
}

function createSideBar(){
    //Sidebar 
    var side_bar = document.getElementById("sidebar")

    //Side bar Header
    var sidebar_header = document.createElement("div")
    sidebar_header.classList.add("sidebar-header")
    var header_content = document.createElement("h3")
    header_content.innerHTML = "Backpack"
    sidebar_header.appendChild(header_content)
    side_bar.appendChild(sidebar_header)

    //Back pack content
    var backpack_content_link_map = {"Field Book": "#fieldbook", "Map": "#", "Database": "#", "Interviews": "#"}
    var component_list = createDropDown("component-list", backpack_content_link_map, "list-unstyled components")
    side_bar.appendChild(component_list)

    var fieldbook = document.getElementById("component-list").firstElementChild
    fieldbook.className = "active"
    var fieldbook_content_link_map = {"Iguana Mystery": "#mystery1", "Mystery 2": "#", "Mystery 3": "#"}
    createSubList("fieldbook", fieldbook, fieldbook_content_link_map)
    
    var iguana_mystery = document.getElementById("fieldbook").firstElementChild
    var iguana_content_link_map = {"Volcano": "#", "Iguana": "#", "Island Life Cycle": "#", "Currents": "#"}
    createSubList("mystery1", iguana_mystery, iguana_content_link_map)

    var buttons = document.createElement("ul")
    buttons.className = "list-unstyled CTAs"
    var setting_btn = document.createElement("li")
    var setting_link = document.createElement("a")
    setting_link.href = "#"
    setting_link.className = "download"
    setting_link.innerHTML = "Settings"
    setting_btn.appendChild(setting_link)
    buttons.appendChild(setting_btn)
    side_bar.appendChild(buttons)
}

function createDropDown(id, map, class_name) {
    var component_list = document.createElement("ul")
    component_list.className = class_name
    component_list.id = id

    var content = Object.keys(map)
    for (var i = 0; i < content.length; i++) {
        var element = document.createElement("li")
        var link = document.createElement("a")
        link.href = map[content[i]]
        link.innerHTML = content[i]
        element.appendChild(link)
        component_list.appendChild(element)
    }
    return component_list
}

function createSubList(id, parent_node, map){
    var a_tag = parent_node.firstChild
    a_tag.setAttribute("data-toggle", "collapse")
    a_tag.setAttribute("aria-expanded", "false")
    a_tag.className = "dropdown-toggle"
    var child = createDropDown(id, map, "collapse list-unstyled")
    parent_node.appendChild(child)
}

function createTopNav(){
    var topnav = document.getElementById('topnav-container')

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
 

    //Button when screen size is small
    var topnav_btn = document.createElement('button')
    topnav_btn.className = "btn btn-dark d-inline-block d-lg-none ml-auto" 
    topnav_btn.setAttribute('type', "button")
    topnav_btn.setAttribute('data-toggle', 'collapse')
    topnav_btn.setAttribute('data-target', '#navbarSupportedContent')
    topnav_btn.setAttribute('aria-controls', 'navbarSupportedContent')
    topnav_btn.setAttribute('aria-expanded', 'false')
    topnav_btn.setAttribute('aria-label', "Toggle navigation")
    var topnav_icon = document.createElement('i')
    topnav_icon.className = "fas fa-align-justify"
    topnav_btn.appendChild(topnav_icon)

    //Content of top navigation bar 
    var nav_content = document.getElementById("navbarSupportedContent")
    var content_to_link_map = {'Mystery': 'index.html', 'About': 'homepage/about.html', 'Help': '#', 'Gallery': '#'}
    var content_list = document.createElement('ul')
    content_list.className = "nav navbar-nav ml-auto"
    var active = true
    for (var key in content_to_link_map){
        var element = document.createElement('li')
        element.className = "nav-item"
        if (active) {
            element.className += " active"
            active = false
        }
        var link = document.createElement('a')
        link.className = "nav-link"
        link.href = content_to_link_map[key]
        link.innerHTML = key
        element.appendChild(link)
        content_list.appendChild(element)
    }
    nav_content.appendChild(content_list)

    topnav.insertBefore(topnav_btn, nav_content)
    topnav.insertBefore(sidebar_button, topnav_btn)
}

$(document).ready(function () {
    createSideBar()
    createTopNav()
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});