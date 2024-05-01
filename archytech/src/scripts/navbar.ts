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
    menuToggleElement?.classList.toggle('duration-200', false);
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
    }
}

// Function to calculate the scroll percentage relative to the full document height
function calculateScrollPercentage() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Calculate the scroll percentage relative to the full document height
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

    return scrollPercentage;
}

// Function to update logo and menu toggle colors based on scroll position and device type
function updateLogoAndMenuToggleColors() {
    menuToggleElement?.classList.toggle('duration-200', true);
    // Get the current scroll position
    let scrollPosition = window.scrollY;
    const scrollPercentage = calculateScrollPercentage();
    const isSmallMobile = isSmallMobileDevice(); // Check if the device is small mobile
    const isLargeMobile = isLargeMobileDevice(); // Check if the device is large mobile

    if (isSmallMobile) {
        // Apply small mobile-specific color changes based on scroll percentage
        if (
            window.location.pathname === '/' &&
            !isMenuOpen &&
            ((scrollPercentage >= 18 && scrollPercentage <= 39) ||
                (scrollPercentage >= 61 && scrollPercentage <= 82))
        ) {
            setElementColor(
                'fill-brand-black',
                'bg-brand-black',
                'before:bg-brand-black',
                'after:bg-brand-black',
            );
        } else if (
            window.location.pathname === '/' &&
            !isMenuOpen &&
            ((scrollPercentage >= 39 && scrollPercentage <= 61) || scrollPercentage >= 82)
        ) {
            setElementColor('fill-white', 'bg-white', 'before:bg-white', 'after:bg-white');
        } else if (
            window.location.pathname !== '/' &&
            scrollPosition / window.innerHeight >= 0.91 &&
            !isMenuOpen
        ) {
            setElementColor(
                'fill-brand-black',
                'bg-brand-black',
                'before:bg-brand-black',
                'after:bg-brand-black',
            );
        } else {
            setElementColor('fill-white', 'bg-white', 'before:bg-white', 'after:bg-white');
        }
    } else if (isLargeMobile) {
        // Apply large mobile-specific color changes based on scroll percentage
        if (
            window.location.pathname === '/' &&
            !isMenuOpen &&
            ((scrollPercentage >= 21 && scrollPercentage <= 42) ||
                (scrollPercentage >= 66 && scrollPercentage <= 85))
        ) {
            setElementColor(
                'fill-brand-black',
                'bg-brand-black',
                'before:bg-brand-black',
                'after:bg-brand-black',
            );
        } else if (
            window.location.pathname === '/' &&
            !isMenuOpen &&
            ((scrollPercentage >= 42 && scrollPercentage <= 66) || scrollPercentage >= 85)
        ) {
            setElementColor('fill-white', 'bg-white', 'before:bg-white', 'after:bg-white');
        } else if (
            window.location.pathname !== '/' &&
            scrollPosition / window.innerHeight >= 0.91 &&
            !isMenuOpen
        ) {
            setElementColor(
                'fill-brand-black',
                'bg-brand-black',
                'before:bg-brand-black',
                'after:bg-brand-black',
            );
        } else {
            setElementColor('fill-white', 'bg-white', 'before:bg-white', 'after:bg-white');
        }
    } else {
        // Apply desktop-specific color changes based on scroll percentage
        if (
            window.location.pathname === '/' &&
            !isMenuOpen &&
            ((scrollPercentage >= 29 && scrollPercentage <= 50) ||
                (scrollPercentage >= 72 && scrollPercentage <= 93))
        ) {
            setElementColor(
                'fill-brand-black',
                'bg-brand-black',
                'before:bg-brand-black',
                'after:bg-brand-black',
            );
        } else if (
            window.location.pathname === '/' &&
            !isMenuOpen &&
            ((scrollPercentage >= 50 && scrollPercentage <= 72) || scrollPercentage >= 93)
        ) {
            setElementColor('fill-white', 'bg-white', 'before:bg-white', 'after:bg-white');
        } else if (
            window.location.pathname !== '/' &&
            scrollPosition / window.innerHeight >= 0.91 &&
            !isMenuOpen
        ) {
            setElementColor(
                'fill-brand-black',
                'bg-brand-black',
                'before:bg-brand-black',
                'after:bg-brand-black',
            );
        } else {
            setElementColor('fill-white', 'bg-white', 'before:bg-white', 'after:bg-white');
        }
    }
}

// Helper function to check if the device is a small mobile device based on viewport width
function isSmallMobileDevice() {
    return window.innerWidth <= 427; // Adjust threshold based on desired breakpoint for mobile view
}

// Helper function to check if the device is a small mobile device based on viewport width
function isLargeMobileDevice() {
    return window.innerWidth >= 428 && window.innerWidth <= 1020; // Adjust threshold based on desired breakpoint for mobile view
}

// Helper function to set element colors
function setElementColor(
    fillClass: string,
    bgClass: string,
    beforeClass: string,
    afterClass: string,
) {
    logo?.classList.remove('fill-white', 'fill-brand-black');
    logo?.classList.add(fillClass);
    menuToggleElement?.classList.remove(
        'bg-white',
        'bg-brand-black',
        'before:bg-white',
        'before:bg-brand-black',
        'after:bg-white',
        'after:bg-brand-black',
    );
    menuToggleElement?.classList.add(bgClass, beforeClass, afterClass);
}

// Event listener for menu toggle button
document.getElementById('menu-toggle')?.addEventListener('click', function () {
    // Get the current scroll position
    let scrollPosition = window.scrollY;
    const scrollPercentage = calculateScrollPercentage();
    const isSmallMobile = isSmallMobileDevice(); // Check if the device is small mobile
    const isLargeMobile = isLargeMobileDevice(); // Check if the device is large mobile
    // Update storedLogoColor when menu is first opened
    if (isSmallMobile) {
        if (
            window.location.pathname === '/' &&
            isMenuOpen &&
            ((scrollPercentage >= 18 && scrollPercentage <= 39) ||
                (scrollPercentage >= 61 && scrollPercentage <= 82))
        ) {
            storedLogoColor = 'fill-brand-black';
        } else if (
            window.location.pathname === '/' &&
            isMenuOpen &&
            ((scrollPercentage >= 39 && scrollPercentage <= 61) || scrollPercentage >= 82)
        ) {
            storedLogoColor = 'fill-white';
        } else if (
            window.location.pathname !== '/' &&
            scrollPosition / window.innerHeight >= 0.91 &&
            isMenuOpen
        ) {
            storedLogoColor = 'fill-brand-black';
        } else {
            storedLogoColor = 'fill-white';
        }
    } else if (isLargeMobile) {
        // Apply large mobile-specific color changes based on scroll percentage
        if (
            window.location.pathname === '/' &&
            isMenuOpen &&
            ((scrollPercentage >= 21 && scrollPercentage <= 42) ||
                (scrollPercentage >= 64 && scrollPercentage <= 85))
        ) {
            storedLogoColor = 'fill-brand-black';
        } else if (
            window.location.pathname === '/' &&
            isMenuOpen &&
            ((scrollPercentage >= 42 && scrollPercentage <= 64) || scrollPercentage >= 85)
        ) {
            storedLogoColor = 'fill-white';
        } else if (
            window.location.pathname !== '/' &&
            scrollPosition / window.innerHeight >= 0.91 &&
            isMenuOpen
        ) {
            storedLogoColor = 'fill-brand-black';
        } else {
            storedLogoColor = 'fill-white';
        }
    } else {
        // Apply desktop-specific color changes based on scroll percentage
        if (
            window.location.pathname === '/' &&
            isMenuOpen &&
            ((scrollPercentage >= 29 && scrollPercentage <= 50) ||
                (scrollPercentage >= 72 && scrollPercentage <= 93))
        ) {
            storedLogoColor = 'fill-brand-black';
        } else if (
            window.location.pathname === '/' &&
            isMenuOpen &&
            ((scrollPercentage >= 50 && scrollPercentage <= 72) || scrollPercentage >= 93)
        ) {
            storedLogoColor = 'fill-white';
        } else if (
            window.location.pathname !== '/' &&
            scrollPosition / window.innerHeight >= 0.91 &&
            isMenuOpen
        ) {
            storedLogoColor = 'fill-brand-black';
        } else {
            storedLogoColor = 'fill-white';
        }
    }

    console.log(storedLogoColor);

    toggleMenu();
});

// Event listener for scroll and load events to update logo and menu toggle colors
['load', 'scroll'].forEach((event) =>
    window.addEventListener(event, updateLogoAndMenuToggleColors),
);
