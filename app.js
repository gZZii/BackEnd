const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const dbURL = 
    "mongodb+srv://guillaumeadelet:LLcavDBzTp3Rdmgi@monvieuxgrimoire.axbq0jw.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(dbURL)
    .then((result) => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err));


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


// ROUTES FROM API DOCUMENTATION
// Don't forget to add the Bearer token to the headers of the requests
// if userId doesn't match the token, the request will be rejected with a 403 status code

    // POST /api/auth/signup
app.post('/api/auth/signup', (req, res, next) => {

});

    // POST /api/auth/login
app.post('/api/auth/login', (req, res, next) => {

});

    // GET /api/books
app.get('/api/books', (req, res, next) => {
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(error => res.status(400).json({ error }));
  });

    // GET /api/books/:id
app.get('/api/books/:id', (req, res, next) => {
    Book.findOne({ _id: req.params.id })
        .then(book => res.status(200).json(book))
        .catch(error => res.status(404).json({ error }));
});

    // GET /api/books/bestrating      (done with copilot) limit should maybe changed
app.get('/api/books/bestrating', (req, res, next) => {
    Book.find().sort({ averageRating: -1 }).limit(3)
        .then(books => res.status(200).json(books))
        .catch(error => res.status(400).json({ error }));
});

    // POST /api/books
app.post('/api/books', (req, res, next) => {
    const book = new Book({
        ...req.body
    });
    book.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

    // PUT /api/books/:id   update a book (done with copilot)
app.put('/api/books/:id', (req, res, next) => {
    Book.updateOne({ _id: req.params
        .id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
});

    // DELETE /api/books/:id   delete a book (done with copilot)
app.delete('/api/books/:id', (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
});

    // POST /api/books/:id/rating  add rating to a book (done with copilot)
app.post('/api/books/:id/rating', (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { $push: { rating: req.body } })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
});


module.exports = app; // Export the app object