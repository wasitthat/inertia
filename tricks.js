'use strict';
$(document).ready(function() {
    // Add active class to clicked nav item
    $('.nav-link').on('click', function() {
        console.log("hello");
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
    });
});

const navItems = document.querySelectorAll('.nav-link');
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', (event) => {
        console.log(event);

        // Remove active class from all navigation items
        navItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Add active class to the clicked navigation item
        navItem.classList.add('active');

        // Navigate to the URL of the link
        const href = navItem.getAttribute('href');
        window.location.href = href;

        // Store the index of the selected navigation item
        localStorage.setItem('selectedNavItem', index);
        //event.preventDefault(); // Prevent the default behavior of the link
    });
});

// Check for stored value and add active class to corresponding navigation item
const storedIndex = localStorage.getItem('selectedNavItem');
if (storedIndex !== null) {
    console.log(storedIndex);
    navItems[storedIndex].classList.add('active');
}
