const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// add routes, both api and view
app.use(routes);

// connect to the mongo db
mongoose.connect(process.env.MONGODB_URI);

// Start the API server
app.listen(PORT, function () {
    console.log(`API server now listening on PORT ${PORT}`);
});