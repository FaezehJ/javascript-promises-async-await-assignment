// START OF REVIEW

// One of the key applications of Asynchronous programming is using it to fetch data from
// APIs (Application Programming Interfaces).
// Nowadays, there are two primary ways that we can deal with manipulating data that comes
// in asynchronously: Promises and Async/Await

// Promises:
// Promises represent the eventual completion or failure of an asynchronous operation.
// They provide a simple and chainable syntax that allows you to handle these success and error
// cases separately with the .then() and .catch() methods when receiving a promise from an API

// Example of Promise Chaining:
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Async/Await
// Async/await is a syntax in JavaScript that simplifies asynchronous programming. It allows you
// to write asynchronous code that resembles synchronous code. The async keyword declares a function
// as asynchronous, and the await keyword pauses the execution of the function until a promise is resolved.
// Error handling is done with a try/catch block. Async/await provides a cleaner and more readable way to
// handle promises and sequential asynchronous operations.
// Example:

// Example of Async/Await:
// async function asyncAwaitExample() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let json = await response.json();
//   console.log(json);
// }

// END OF REVIEW

// START OF ASSIGNMENT
// Choose one of the two approaches discussed above (promise chaining or async/await) and create a
// function called getCatFacts() that does the following:
// 1. Takes a number as a parameter.
// 2. Modifies the following API Endpoint so that the 'limit' query parameter is equal to the inputted number
//    - Endpoint: 'https://catfact.ninja/facts?limit=USER_INPUT'
//    - E.g. Given the number 5 as input, the API endpoint string should be 'https://catfact.ninja/facts?limit=5'
// 3. Uses fetch() at the modified endpoint
// 4. Using the chosen approach (promise chaining or async/await), convert the response to json and return the data in its entirety

// Start of Assignment

// Async/Await Approch

async function getCatFacts(number) {
    // endpoint URL based on the inpu number
    const url = `https://catfact.ninja/facts?limit=${number}`;
  
    try {
      // request to the API
      const response = await fetch(url);
  
      // check if the response status is OK (status code 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Convert the response to JSON
      const data = await response.json();
  
      // return the data
      return data;

      // handle errors
    } catch (error) {
      
      console.error('Error fetching cat facts:', error);
      return null;
    }
  }
  getCatFacts(5).then(catFacts => {
    if (catFacts) {
      console.log('Cat Facts:', catFacts);
    }
  });
  


//Promise Chaining Approach

function getCatFacts(number) {
    const url = `https://catfact.ninja/facts?limit=${number}`;
  
    return fetch(url)
      .then(response => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // return the response in JSON file
        return response.json();
      })
      .then(data => {

        return data;
      })

      // handle errors
      .catch(error => {  
        console.error('Error fetching cat facts:', error);
        return null;
      });
  }
  

//END OF ASSIGNMENT

