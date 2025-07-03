const express = require('express'); 
// Import the Express library
const app = express(); // Create an Express application

const port = 3000; // Define the port number for the server

app.get('/', (req, res) => { // Define a route for the root URL
  res.send('Flower Shop'); // Send a response to the client
});

app.listen(port, ()  => { // Start the server and listen on the specified port
  console.log(`Server is running on http://localhost:${port}`); // Log a message to the console
});

app.use(express.static(__dirname))

app.get('/github/index', (req, res) => {
  res.sendFile(__dirname + '/github/index.html');
}

app.get('/github/contact', (req, res) => {
  res.sendFile(__dirname + '/github/index.html');
}

app.get('/github/about', (req, res) => {
  res.sendFile(__dirname + '/github/index.html');
}
