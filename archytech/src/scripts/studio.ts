    // Define types
    interface DropdownButton extends HTMLButtonElement {
        parentElement: HTMLElement | null;
    }

    // Get all dropdown buttons
    const dropdownButtons: NodeListOf<DropdownButton> = document.querySelectorAll('.dropdown-button');

    // Attach click event listener to each dropdown button
    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const header = getHeaderFromButton(button);
            if (header) {
                toggleDropdown(header);
            }
        });
    });

    function getHeaderFromButton(button: DropdownButton): HTMLHeadElement | null {
        const parentElement = button.parentElement;
        if (parentElement && parentElement.querySelector('h3')) {
            const headerElement = parentElement.querySelector('h3');
            return headerElement || null;
        }
        return null;
    }

    function toggleDropdown(header: HTMLHeadElement) {
        const contentDiv = document.getElementById(`${header.textContent}-content`) as HTMLElement | null;
        const arrowIcon = document.getElementById(`${header.textContent}-dropdown`) as HTMLElement | null

        if (contentDiv && arrowIcon) {
            const isClosed = contentDiv.classList.contains('max-h-0');

            // Toggle visibility
            if (isClosed) {
                // Show dropdown content (slide down animation)
                contentDiv.classList.remove('max-h-0');
                arrowIcon.classList.remove('text-brand-black');
                header.classList.remove('text-brand-black');
                contentDiv.classList.add('max-h-full');
                contentDiv.classList.add('mb-4');
                arrowIcon.classList.add('text-brand-purple');
                header.classList.add('text-brand-purple');
                arrowIcon.classList.add('rotate-180');
            } else {
                // Hide dropdown content (slide up animation)
                contentDiv.classList.remove('max-h-full');
                contentDiv.classList.remove('mb-4');
                arrowIcon.classList.remove('text-brand-purple');
                header.classList.remove('text-brand-purple');
                arrowIcon.classList.remove('rotate-180');
                arrowIcon.classList.add('text-brand-black');
                header.classList.add('text-brand-black');
                contentDiv.classList.add('max-h-0');
            }
        }
    }