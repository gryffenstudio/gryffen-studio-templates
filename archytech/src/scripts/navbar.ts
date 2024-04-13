let menu = document.getElementById('menu');
let menuToggle = document.getElementById('menu-toggle');
let menuToggleElement = document.getElementById('menu-toggle-element');
let logo = document.getElementById('logo');
let isMenuOpen = false;
let storedLogoColor = logo?.classList.contains('fill-brand-black')
    ? 'fill-brand-black'
    : 'fill-white';

// Function to toggle menu visibility and color
function toggleMenu() {
    // Toggle menu visibility
    menuToggleElement?.classList.toggle('duration-0', true);
    menu?.classList.toggle('translate-x-full');
    menu?.classList.toggle('invisible');
    menuToggle?.classList.toggle('hamburger-toggle');

    // Toggle menu state
    isMenuOpen = !isMenuOpen;

    // Toggle logo color based on menu state
    if (isMenuOpen) {
        logo?.classList.remove(storedLogoColor);
        logo?.classList.add('fill-white');
        menuToggleElement?.classList.remove(
            storedLogoColor === 'fill-brand-black' ? 'bg-brand-black' : 'bg-white',
        );
        menuToggleElement?.classList.add('bg-white');
        menuToggleElement?.classList.remove(
            storedLogoColor === 'fill-brand-black' ? 'before:bg-brand-black' : 'before:bg-white',
        );
        menuToggleElement?.classList.add('before:bg-white');
        menuToggleElement?.classList.remove(
            storedLogoColor === 'fill-brand-black' ? 'after:bg-brand-black' : 'after:bg-white',
        );
        menuToggleElement?.classList.add('after:bg-white');
        document.documentElement.style.setProperty('--scrollbar-track-color', '#303136');
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#FFFFFF');
    } else {
        logo?.classList.remove('fill-white');
        logo?.classList.add(storedLogoColor);
        menuToggleElement?.classList.remove('bg-white');
        menuToggleElement?.classList.add(
            storedLogoColor === 'fill-brand-black' ? 'bg-brand-black' : 'bg-white',
        );
        menuToggleElement?.classList.remove('before:bg-white');
        menuToggleElement?.classList.add(
            storedLogoColor === 'fill-brand-black' ? 'before:bg-brand-black' : 'before:bg-white',
        );
        menuToggleElement?.classList.remove('after:bg-white');
        menuToggleElement?.classList.add(
            storedLogoColor === 'fill-brand-black' ? 'after:bg-brand-black' : 'after:bg-white',
        );
        document.documentElement.style.setProperty(
            '--scrollbar-track-color',
            storedLogoColor === 'fill-brand-black' ? '#FFFFFF' : '#303136',
        );
        document.documentElement.style.setProperty(
            '--scrollbar-thumb-color',
            storedLogoColor === 'fill-brand-black' ? '#303136' : '#FFFFFF',
        );
    }
}

function updateLogoAndMenuToggleColors() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;
    // Check if the scroll position is greater than or equal to 850px
    if (scrollPosition >= 850 && !isMenuOpen) {
        // Toggle logo color to fill-brand-black
        logo?.classList.remove('fill-white');
        logo?.classList.add('fill-brand-black');
        // Toggle menu toggle color to bg-brand-black
        menuToggleElement?.classList.remove('bg-white');
        menuToggleElement?.classList.add('bg-brand-black');
        menuToggleElement?.classList.remove('before:bg-white');
        menuToggleElement?.classList.add('before:bg-brand-black');
        menuToggleElement?.classList.remove('after:bg-white');
        menuToggleElement?.classList.add('after:bg-brand-black');
        document.documentElement.style.setProperty('--scrollbar-track-color', '#FFFFFF');
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#303136');
    } else {
        // Toggle logo color to fill-brand-black
        logo?.classList.remove('fill-brand-black');
        logo?.classList.add('fill-white');
        // Toggle menu toggle color to bg-white
        menuToggleElement?.classList.remove('bg-brand-black');
        menuToggleElement?.classList.add('bg-white');
        menuToggleElement?.classList.remove('before:bg-brand-black');
        menuToggleElement?.classList.add('before:bg-white');
        menuToggleElement?.classList.remove('after:bg-brand-black');
        menuToggleElement?.classList.add('after:bg-white');
        document.documentElement.style.setProperty('--scrollbar-track-color', '#303136');
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#FFFFFF');
    }
}

// Event listener for menu toggle button
document.getElementById('menu-toggle')?.addEventListener('click', function () {
    let scrollPosition = window.scrollY;
    // Update storedLogoColor when menu is first opened
    if (isMenuOpen && scrollPosition >= 850) {
        storedLogoColor = 'fill-brand-black';
    } else {
        storedLogoColor = 'fill-white';
    }
    toggleMenu();
});

// Event listener for scroll and load events to update logo and menu toggle colors
['load', 'scroll'].forEach((event) =>
    window.addEventListener(event, updateLogoAndMenuToggleColors),
);
