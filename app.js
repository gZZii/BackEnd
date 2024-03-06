const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const path = require('path');

app.use(express.json());

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


app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;