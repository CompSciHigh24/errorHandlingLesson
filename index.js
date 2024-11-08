// Step 1: Use the terminal command 'npm install dotenv'

// Step 2: Create a .env file and add the following line:
// API_KEY=...
// Replace ... with the API key from GChat

// Step 3: Create a .gitignore file and add .env to it

// Step 4: Import dotenv config

// Step 5: Access the API key from the .env file using process.env and store it in a variable

// Step 6: Construct the request URL using the environmental variable
const requestURL = "https://api.nasa.gov/planetary/apod?api_key=";

async function fetchData(url) {
  // Step 7: Wrap your code in a try {} block
  const response = await fetch(url);

  // Step 8: Check if the response status is not OK
  // Log an error message if the response status is not OK

  const data = await response.json();

  console.log(data);
  return data;

  // Step 10: Add a catch block to handle any errors that occur during the fetch or data processing
}

fetchData(requestURL);
