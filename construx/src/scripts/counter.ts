// Interface declaration for CounterElement
// Extends HTMLElement to include a dataset property with a targetValue attribute
interface CounterElement extends HTMLElement {
    dataset: {
        targetValue: string;
    };
}

// Function to animate the counter from 0 to the target value
const animateCounter = (element: CounterElement, duration: number = 5000) => {
    const targetValue = parseInt(element.dataset.targetValue); // Retrieve the target value from the data attribute
    const startValue = 0;
    const increment = targetValue / (duration / 60); // Calculate the increment value for each frame (assuming 60 frames per second)
    let currentValue = startValue;

    // Function to update the counter value
    const updateCounter = () => {
        currentValue += increment; // Increment the current value
        if (currentValue < targetValue) {
            element.textContent = Math.ceil(currentValue).toString(); // Update the element's text content
            requestAnimationFrame(updateCounter); // Schedule the next frame
        } else {
            element.textContent = targetValue.toString() + '+'; // Ensure the final value is set exactly and has the '+' sign
        }
    };

    updateCounter(); // Start the counter animation
};

// Function to check if an element is in the viewport
const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect(); // Get the element's bounding rectangle
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Function to start counters if they are in the viewport
const startCounters = () => {
    const counterElements = document.querySelectorAll<CounterElement>("[id$='-count']"); // Select all elements ending with -count
    counterElements.forEach((element) => {
        if (isElementInViewport(element)) {
            animateCounter(element); // Start the counter animation for each element in the viewport
        }
    });
};

// Variable to track if counters have already started
let countersStarted = false;

// Function to handle the scroll event
const onScroll = () => {
    if (!countersStarted) {
        const counterElements = document.querySelectorAll<CounterElement>("[id$='-count']"); // Select all elements ending with -count
        let allInView = true;

        counterElements.forEach((element) => {
            if (!isElementInViewport(element)) {
                allInView = false; // Check if all counter elements are in the viewport
            }
        });

        if (allInView) {
            countersStarted = true; // Set the countersStarted flag to true
            startCounters(); // Start the counters
            window.removeEventListener('scroll', onScroll); // Remove the scroll event listener
        }
    }
};

// Add scroll event listener to start counters on first scroll
window.addEventListener('scroll', onScroll);
