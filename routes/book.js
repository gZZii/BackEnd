const express = require("express");
const router = express.Router();

const bookCtrl = require("../controllers/book");


router.get("/api/books", bookCtrl.getAllBooks);
router.get("/api/books/:id", bookCtrl.getOneBook);
router.get("/api/books/bestRating", bookCtrl.getBestRating);
router.post("/api/books", bookCtrl.createBook);
router.put("/api/books/:id", bookCtrl.modifyBook);
router.delete("/api/books/:id", bookCtrl.deleteBook);
router.post("/api/books/:id/rating", bookCtrl.addRating);

module.exports = router;