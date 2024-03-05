const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');

const dbURL = 
    "mongodb+srv://guillaumeadelet:LLcavDBzTp3Rdmgi@monvieuxgrimoire.axbq0jw.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(dbURL)
    .then((result) => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);


module.exports = app; // Export the app object