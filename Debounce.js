// Implementation


// Debounce function
function debounce(func, delay) {
  let timer; // closure to store timeout

  return function (...args) {
    clearTimeout(timer); // clear previous timer
    timer = setTimeout(() => {
      func.apply(this, args); // call function after delay
    }, delay);
  };
}

// Example usage
function search() {
  console.log("API Call");
}

// Create debounced function
const debouncedSearch = debounce(search, 500);

// Simulate user typing / calling multiple times
debouncedSearch(); // call 1
debouncedSearch(); // call 2
debouncedSearch(); // call 3

// Only the last call will execute after 500ms




//Debounce delays the execution of a 
// function until after a specified delay has passed since the last time it was invoked.

// Concept

// Debounce delays a function from running until a certain time has passed since the last call.

// Example: Typing in a search box (API call should run after user stops typing).