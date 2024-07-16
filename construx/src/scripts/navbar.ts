// Event listener for menu toggle button
document.getElementById('menu-toggle')?.addEventListener('click', function () {
    let menu = document.getElementById('menu');
    let menuToggle = document.getElementById('menu-toggle');
    let menuToggleElement = document.getElementById('menu-toggle-element');
    let menuSpan = document.getElementById('menu-span');

    // Toggle menu visibility
    menuToggleElement?.classList.toggle('duration-200', false);
    menu?.classList.toggle('translate-x-full');
    menu?.classList.toggle('invisible');
    menuToggle?.classList.toggle('hamburger-toggle');

    if (menuSpan?.classList.contains('active-menu')) {
        menuSpan?.classList.remove('active-menu');
        menuSpan?.classList.add('inactive-menu');
    } else {
        menuSpan?.classList.remove('inactive-menu');
        menuSpan?.classList.add('active-menu');
    }
});
