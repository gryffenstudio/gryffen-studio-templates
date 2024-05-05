
let residentialButton = document.getElementById('residential-filter-button');
let commercialButton = document.getElementById('commercial-filter-button');
let inProgressButton = document.getElementById('in-progress-filter-button');
let showAllButton = document.getElementById('show-all-filter-button');

let residentialUnderline = document.getElementById('residential-underline');
let commercialUnderline = document.getElementById('commercial-underline');
let inProgressUnderline = document.getElementById('in-progress-underline');
let showAllUnderline = document.getElementById('show-all-underline');

let residentialProjectCards = document.getElementsByClassName('residential')
let commercialProjectCards = document.getElementsByClassName('commercial')
let inProgressProjectCards = document.getElementsByClassName('in_progress')

// Store reference to the currently active link
let activeProjectLink: HTMLAnchorElement | null = null;

enum FilterSelection{
    RESIDENTIAL = 'residential',
    COMMERCIAL = 'commercial',
    IN_PROGRESS = 'in_progress',
    SHOW_ALL = 'show_all'
}

// Get all the links with the hover effect
const projectLinks = document.querySelectorAll<HTMLAnchorElement>('a.relative');

// Add event listeners for touch events on each link
projectLinks.forEach(link => {
    link.addEventListener('touchstart', (event) => {
        event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)

        // Hide the previous hover effect if another link is touched
        if (activeProjectLink && activeProjectLink !== link) {
            const previousPictureShadow = activeProjectLink.querySelector('picture.shadow-md') as HTMLElement;
            const previousPAbsolute = activeProjectLink.querySelector('p.absolute') as HTMLElement;
            const previousSpanAbsolute = activeProjectLink.querySelector('span.absolute') as HTMLElement;
            if (previousPAbsolute && previousSpanAbsolute && previousPictureShadow) {
                previousPictureShadow.classList.add('blur-none');
                previousPictureShadow.classList.remove('blur-sm');
                previousPAbsolute.classList.add('opacity-0');
                previousPAbsolute.classList.remove('opacity-100');
                previousSpanAbsolute.classList.add('bg-opacity-0');
                previousSpanAbsolute.classList.remove('bg-opacity-20');
            }
        }

        // Show the hover effect on the current link
        const currentPictureShadow = link.querySelector('picture.shadow-md') as HTMLElement;
        const currentPAbsolute = link.querySelector('p.absolute') as HTMLElement;
        const currentSpanAbsolute = link.querySelector('span.absolute') as HTMLElement;
        if (currentPAbsolute && currentPAbsolute && currentPictureShadow) {
            currentPictureShadow.classList.remove('blur-none');
            currentPictureShadow.classList.add('blur-sm');
            currentPAbsolute.classList.remove('opacity-0');
            currentPAbsolute.classList.add('opacity-100');
            currentSpanAbsolute.classList.remove('bg-opacity-0')
            currentSpanAbsolute.classList.add('bg-opacity-20')
        }

        activeProjectLink = link; // Update the active link reference
    });
});

// Optional: Reset hover effect if user taps outside of active links
document.addEventListener('touchstart', (event) => {
    const target = event.target as HTMLElement;
    const isInsideActiveLink = activeProjectLink && target.closest && target.closest('a.relative') === activeProjectLink;

    if (!isInsideActiveLink && activeProjectLink) {
        const previousPictureShadow = activeProjectLink.querySelector('picture.shadow-md') as HTMLElement;
        const previousPAbsolute = activeProjectLink.querySelector('p.absolute') as HTMLElement;
        const previousSpanAbsolute = activeProjectLink.querySelector('span.absolute') as HTMLElement;
        if (previousPAbsolute && previousSpanAbsolute && previousPictureShadow) {
            previousPictureShadow.classList.add('blur-none');
            previousPictureShadow.classList.remove('blur-sm');
            previousPAbsolute.classList.add('opacity-0');
            previousPAbsolute.classList.remove('opacity-100');
            previousSpanAbsolute.classList.add('bg-opacity-0');
            previousSpanAbsolute.classList.remove('bg-opacity-20');
        }
        activeProjectLink = null;
    }
});



function filterProjects(filter: FilterSelection){
    switch(filter){
        case FilterSelection.RESIDENTIAL:
            //Show the underline
            residentialUnderline?.classList.toggle('invisible', false);
            commercialUnderline?.classList.toggle('invisible', true);
            inProgressUnderline?.classList.toggle('invisible', true);
            showAllUnderline?.classList.toggle('invisible', true);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', false);
            commercialUnderline?.classList.toggle('after:-translate-x-full', true);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', true);
            showAllUnderline?.classList.toggle('after:-translate-x-full', true);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', true);
            commercialButton?.classList.toggle('text-brand-gray', false);
            inProgressButton?.classList.toggle('text-brand-gray', false);
            showAllButton?.classList.toggle('text-brand-gray', false);

            //Show all filtered in project cards
            for(let i = 0; i < residentialProjectCards.length; i++){
                residentialProjectCards[i].classList.toggle('hidden', false);
            }

            //Hide filtered out project cards
            for(let i = 0; i < commercialProjectCards.length; i++){
                commercialProjectCards[i].classList.toggle('hidden', true);
            }

            for(let i = 0; i < inProgressProjectCards.length; i++){
                inProgressProjectCards[i].classList.toggle('hidden', true);
            }

            break;

        case FilterSelection.COMMERCIAL:
            residentialUnderline?.classList.toggle('invisible', true);
            commercialUnderline?.classList.toggle('invisible', false);
            inProgressUnderline?.classList.toggle('invisible', true);
            showAllUnderline?.classList.toggle('invisible', true);


            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', true);
            commercialUnderline?.classList.toggle('after:-translate-x-full', false);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', true);
            showAllUnderline?.classList.toggle('after:-translate-x-full', true);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', false);
            commercialButton?.classList.toggle('text-brand-gray', true);
            inProgressButton?.classList.toggle('text-brand-gray', false);
            showAllButton?.classList.toggle('text-brand-gray', false);
            
            //Show all filtered in project cards
            for(let i = 0; i < commercialProjectCards.length; i++){
                commercialProjectCards[i].classList.toggle('hidden', false);
            }

            //Hide filtered out project cards
            for(let i = 0; i < residentialProjectCards.length; i++){
                residentialProjectCards[i].classList.toggle('hidden', true);
            }

            for(let i = 0; i < inProgressProjectCards.length; i++){
                inProgressProjectCards[i].classList.toggle('hidden', true);
            }

            break;

        case FilterSelection.IN_PROGRESS:
            residentialUnderline?.classList.toggle('invisible', true);
            commercialUnderline?.classList.toggle('invisible', true);
            inProgressUnderline?.classList.toggle('invisible', false);
            showAllUnderline?.classList.toggle('invisible', true);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', true);
            commercialUnderline?.classList.toggle('after:-translate-x-full', true);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', false);
            showAllUnderline?.classList.toggle('after:-translate-x-full', true);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', false);
            commercialButton?.classList.toggle('text-brand-gray', false);
            inProgressButton?.classList.toggle('text-brand-gray', true);
            showAllButton?.classList.toggle('text-brand-gray', false);

            //Show all filtered in project cards
            for(let i = 0; i < inProgressProjectCards.length; i++){
                inProgressProjectCards[i].classList.toggle('hidden', false);
            }

            //Hide filtered out project cards
            for(let i = 0; i < residentialProjectCards.length; i++){
                residentialProjectCards[i].classList.toggle('hidden', true);
            }

            for(let i = 0; i < commercialProjectCards.length; i++){
                commercialProjectCards[i].classList.toggle('hidden', true);
            }

            break;

        case FilterSelection.SHOW_ALL:
            residentialUnderline?.classList.toggle('invisible', true);
            commercialUnderline?.classList.toggle('invisible', true);
            inProgressUnderline?.classList.toggle('invisible', true);
            showAllUnderline?.classList.toggle('invisible', false);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', true);
            commercialUnderline?.classList.toggle('after:-translate-x-full', true);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', true);
            showAllUnderline?.classList.toggle('after:-translate-x-full', false);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', false);
            commercialButton?.classList.toggle('text-brand-gray', false);
            inProgressButton?.classList.toggle('text-brand-gray', false);
            showAllButton?.classList.toggle('text-brand-gray', true);

            //Show all project cards
            for(let i = 0; i < inProgressProjectCards.length; i++){
                inProgressProjectCards[i].classList.toggle('hidden', false);
            }

            for(let i = 0; i < residentialProjectCards.length; i++){
                residentialProjectCards[i].classList.toggle('hidden', false);
            }

            for(let i = 0; i < commercialProjectCards.length; i++){
                commercialProjectCards[i].classList.toggle('hidden', false);
            }

            break;
        default:
            //Show all by default
            residentialUnderline?.classList.toggle('invisible', true);
            commercialUnderline?.classList.toggle('invisible', true);
            inProgressUnderline?.classList.toggle('invisible', true);
            showAllUnderline?.classList.toggle('invisible', false);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', true);
            commercialUnderline?.classList.toggle('after:-translate-x-full', true);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', true);
            showAllUnderline?.classList.toggle('after:-translate-x-full', false);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', false);
            commercialButton?.classList.toggle('text-brand-gray', false);
            inProgressButton?.classList.toggle('text-brand-gray', false);
            showAllButton?.classList.toggle('text-brand-gray', true);
            
            //Show all project cards
            for(let i = 0; i < inProgressProjectCards.length; i++){
                inProgressProjectCards[i].classList.toggle('hidden', false);
            }

            for(let i = 0; i < residentialProjectCards.length; i++){
                residentialProjectCards[i].classList.toggle('hidden', false);
            }

            for(let i = 0; i < commercialProjectCards.length; i++){
                commercialProjectCards[i].classList.toggle('hidden', false);
            }

            break;
    }
}

// Event listener for residential filter click
document.getElementById('residential-filter-button')?.addEventListener('click', function () {
    filterProjects(FilterSelection.RESIDENTIAL)
});

// Event listener for residential filter click
document.getElementById('commercial-filter-button')?.addEventListener('click', function () {
    filterProjects(FilterSelection.COMMERCIAL)
});

// Event listener for residential filter click
document.getElementById('in-progress-filter-button')?.addEventListener('click', function () {
    filterProjects(FilterSelection.IN_PROGRESS)
});

// Event listener for show all click
document.getElementById('show-all-filter-button')?.addEventListener('click', function () {
    filterProjects(FilterSelection.SHOW_ALL)
});

window.addEventListener('load', () => {
    filterProjects(FilterSelection.SHOW_ALL)
});
