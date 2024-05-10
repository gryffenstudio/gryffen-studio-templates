// Get all the links with the hover effect
const featuredProjectLinks = document.querySelectorAll<HTMLAnchorElement>('a.relative');

// Helper function to toggle hover effect
function toggleHoverEffect(link: HTMLAnchorElement) {
    const pictureShadow = link.querySelector('picture.shadow-md') as HTMLElement;
    const pAbsolute = link.querySelector('p.absolute') as HTMLElement;
    const spanAbsolute = link.querySelector('span.absolute') as HTMLElement;

    if (pictureShadow && pAbsolute && spanAbsolute) {
        pictureShadow.classList.remove('blur-none');
        pictureShadow.classList.add('blur-sm');
        pAbsolute.classList.remove('opacity-0');
        pAbsolute.classList.add('opacity-100');
        spanAbsolute.classList.remove('bg-opacity-0');
        spanAbsolute.classList.add('bg-opacity-20');
    }

    // Update the active link reference
    activeProjectLink = link;
}

// Helper function to reset hover effect
function resetHoverEffect(link: HTMLAnchorElement) {
    const pictureShadow = link.querySelector('picture.shadow-md') as HTMLElement;
    const pAbsolute = link.querySelector('p.absolute') as HTMLElement;
    const spanAbsolute = link.querySelector('span.absolute') as HTMLElement;

    if (pictureShadow && pAbsolute && spanAbsolute) {
        pictureShadow.classList.add('blur-none');
        pictureShadow.classList.remove('blur-sm');
        pAbsolute.classList.add('opacity-0');
        pAbsolute.classList.remove('opacity-100');
        spanAbsolute.classList.add('bg-opacity-0');
        spanAbsolute.classList.remove('bg-opacity-20');
    }
}

// Add event listeners for touch events on each link
projectLinks.forEach(link => {
    link.addEventListener('touchstart', (event: TouchEvent) => {
        // Reset previous hover effect if another link is touched
        if (activeProjectLink && activeProjectLink !== link) {
            resetHoverEffect(activeProjectLink);
        }

        // Record initial touch position
        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;

        // Toggle hover effect on the current link
        toggleHoverEffect(link);
    });

    link.addEventListener('touchend', (event: TouchEvent) => {
        // Check if the link is still active and determine tap vs swipe
        if (activeProjectLink === link && touchStartX !== null && touchStartY !== null) {
            const touch = event.changedTouches[0];
            const deltaX = Math.abs(touch.clientX - touchStartX);
            const deltaY = Math.abs(touch.clientY - touchStartY);

            // Check if the touch was primarily a tap (minimal movement)
            if (deltaX < 10 && deltaY < 10) {
                // Allow navigation to the link's href
                window.location.href = link.href;
            }
        }

        // Reset touch start coordinates
        touchStartX = null;
        touchStartY = null;
    });
});