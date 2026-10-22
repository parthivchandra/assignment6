
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve HTML, CSS and JavaScript files
app.use(express.static(__dirname));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Personal website running at http://localhost:${PORT}`);
});
