/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//
const wrapper = document.getElementById("test");
const frameContainer = wrapper.querySelector(".container-st");
const framesAll = frameContainer.querySelectorAll(".frame");
const framesNum = framesAll.length;
for (let i = 0; i < framesNum; i++) {
    framesAll[i].style.order = i + 1;
}
const scrollClick = (direction) => {
    for (let i = 0; i < framesNum; i++) {
        let current_order = Number(framesAll[i].style.order);
        if (direction == "forward") {
            if (current_order == 1) {
                var new_order = framesNum;
            } else {
                var new_order = Number(current_order) - 1;
            }
        } else if (direction == "backward") {
            if (current_order == framesNum) {
                var new_order = 1;
            } else {
                var new_order = Number(current_order) + 1;
            }
        }
        framesAll[i].style.order = new_order;
    }
};


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
