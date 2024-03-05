const Book = require("../models/Book");

// ROUTES FROM API DOCUMENTATION
// Don't forget to add the Bearer token to the headers of the requests
// if userId doesn't match the token, the request will be rejected with a 403 status code
// sort by model/book order

exports.getAllBooks = (req, res, next) => {
    Book.find()
      .then((books) => res.status(200).json(books))
      .catch((error) => res.status(400).json({ error }));
  };

exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
      .then((book) => res.status(200).json(book))
      .catch((error) => res.status(404).json({ error }));
  };

exports.getBestRating = (req, res, next) => {
    Book.find()
      .sort({ averageRating: -1 })
      .limit(3)
      .then((books) => res.status(200).json(books))
      .catch((error) => res.status(400).json({ error }));
  }

exports.createBook = (req, res, next) => {
  const book = new Book({
    ...req.body,
  });
  book
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyBook = (req, res, next) => {
  Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteBook = (req, res, next) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.addRating = (req, res, next) => {
  Book.updateOne({ _id: req.params.id }, { $push: { rating: req.body } })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};