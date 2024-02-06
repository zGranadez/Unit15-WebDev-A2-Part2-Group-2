document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Close the dropdown menu when clicking outside the menu
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle) {
            navMenu.classList.remove('active');
        }
    });

    // Prevent closing the dropdown when clicking on menu items
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
});

