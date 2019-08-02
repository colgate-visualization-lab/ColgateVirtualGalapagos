'use strict'
//create sidebar

function createSideBar(){
    //Sidebar 
    var side_bar = document.createElement("nav")
    side_bar.classList.add("active")
    side_bar.id = "sidebar"
    var body = document.body
    body.appendChild(side_bar)

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
    var a_tag = fieldbook.firstChild
    a_tag.setAttribute("data-toggle", "collapse")
    a_tag.setAttribute("aria-expanded", "false")
    a_tag.className = "dropdown-toggle"
    var fieldbook_content_link_map = {"Iguana Mystery": "#mystery1", "Mystery 2": "#", "Mystery 3": "#"}
    var fieldbook_content = createDropDown("fieldbook", fieldbook_content_link_map, "collapse list-unstyled")
    fieldbook.appendChild(fieldbook_content)
    
    var iguana_mystery = document.getElementById("fieldbook").firstElementChild
    a_tag = iguana_mystery.firstChild
    a_tag.setAttribute("data-toggle", "collapse")
    a_tag.setAttribute("aria-expanded", "false")
    a_tag.className = "dropdown-toggle"
    var iguana_content_link_map = {"Volcano": "#", "Iguana": "#", "Island Life Cycle": "#", "Currents": "#"}
    var iguana_content = createDropDown("mystery1", iguana_content_link_map, "list-unstyled collapse show")
    iguana_mystery.appendChild(iguana_content)
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