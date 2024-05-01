let residentialButton = document.getElementById('residential-filter-button');
let commercialButton = document.getElementById('commercial-filter-button');
let inProgressButton = document.getElementById('in-progress-filter-button');
let residentialUnderline = document.getElementById('residential-underline');
let commercialUnderline = document.getElementById('commercial-underline');
let inProgressUnderline = document.getElementById('in-progress-underline');

enum FilterSelection{
    RESIDENTIAL = 'residential',
    COMMERCIAL = 'commercial',
    IN_PROGRESS = 'in_progress',
    ALL = 'all'
}

function filterProjects(filter: FilterSelection){
    switch(filter){
        case FilterSelection.RESIDENTIAL:
            //Show the underline
            residentialUnderline?.classList.toggle('invisible', false);
            commercialUnderline?.classList.toggle('invisible', true);
            inProgressUnderline?.classList.toggle('invisible', true);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', false);
            commercialUnderline?.classList.toggle('after:-translate-x-full', true);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', true);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', true);
            commercialButton?.classList.toggle('text-brand-gray', false);
            inProgressButton?.classList.toggle('text-brand-gray', false);
            break;

        case FilterSelection.COMMERCIAL:
            residentialUnderline?.classList.toggle('invisible', true);
            commercialUnderline?.classList.toggle('invisible', false);
            inProgressUnderline?.classList.toggle('invisible', true);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', true);
            commercialUnderline?.classList.toggle('after:-translate-x-full', false);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', true);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', false);
            commercialButton?.classList.toggle('text-brand-gray', true);
            inProgressButton?.classList.toggle('text-brand-gray', false);
            break;

        case FilterSelection.IN_PROGRESS:
            residentialUnderline?.classList.toggle('invisible', true);
            commercialUnderline?.classList.toggle('invisible', true);
            inProgressUnderline?.classList.toggle('invisible', false);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', true);
            commercialUnderline?.classList.toggle('after:-translate-x-full', true);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', false);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', false);
            commercialButton?.classList.toggle('text-brand-gray', false);
            inProgressButton?.classList.toggle('text-brand-gray', true);
            break;
        default:
            //Filter for Residential by Default
            //Show the underline
            residentialUnderline?.classList.toggle('invisible', false);
            commercialUnderline?.classList.toggle('invisible', true);
            inProgressUnderline?.classList.toggle('invisible', true);

            //Slide in underline and set others back
            residentialUnderline?.classList.toggle('after:-translate-x-full', false);
            commercialUnderline?.classList.toggle('after:-translate-x-full', true);
            inProgressUnderline?.classList.toggle('after:-translate-x-full', true);

            //Update the colors
            residentialButton?.classList.toggle('text-brand-gray', true);
            commercialButton?.classList.toggle('text-brand-gray', false);
            inProgressButton?.classList.toggle('text-brand-gray', false);
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

window.addEventListener('load', () => {
    filterProjects(FilterSelection.RESIDENTIAL)
});
