'use strict'

import { HomepageNavigationBar } from './homepage_navbar.js'

var nav_bar = new HomepageNavigationBar() 
nav_bar.init()
nav_bar.setupLink()

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});