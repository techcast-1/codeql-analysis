// Example of JavaScript code vulnerable to Cross-Site Scripting (XSS) attack

// Function to display a message on the webpage
function displayMessage(message) {
  document.getElementById('message').innerHTML = message; // Vulnerable to XSS
}

// Assume this function retrieves user input from a form field
function getUserName() {
  return document.getElementById('username').value;
}

// Assume this function retrieves user input from a URL parameter
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Assume this function retrieves user input from a cookie
function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='))
    ?.split('=')[1];
  return cookieValue ? decodeURIComponent(cookieValue) : null;
}

// Assume this function retrieves user input from a server response
function getServerResponse() {
  return fetch('/api/data')
    .then(response => response.text())
    .then(data => data);
}

// Main function to display a personalized greeting message
function greetUser() {
  const userName = getUserName(); // User-provided input
  const greetingMessage = `Hello, ${userName}!`; // Constructing message using user input
  displayMessage(greetingMessage); // Display the message on the webpage
}

// Call the greetUser function when the page loads
window.onload = greetUser;
