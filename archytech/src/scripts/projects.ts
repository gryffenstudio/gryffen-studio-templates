
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


enum FilterSelection{
    RESIDENTIAL = 'residential',
    COMMERCIAL = 'commercial',
    IN_PROGRESS = 'in_progress',
    SHOW_ALL = 'show_all'
}

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
