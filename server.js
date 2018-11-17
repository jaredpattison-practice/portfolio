'use strict';

// Load Express
const express = require('express');

// Instantiate Express
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT || 3000;

// Define which directory that we will serve files from
app.use(express.static('./public'));

// Tell the app to listen
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));