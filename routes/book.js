const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const multer = require("../middleware/multer-config");


const bookCtrl = require("../controllers/book");


// j'ai retiré auth de toutes les routes get puique le client n'a pas besoin d'être authentifié pour voir les livres 
router.get("/",  bookCtrl.getAllBooks);
router.get("/:id",  bookCtrl.getOneBook);
router.get("/bestRating",  bookCtrl.getBestRating);
router.post("/", auth, multer, bookCtrl.createBook);
router.put("/:id", auth, multer, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.post("/:id/rating", auth, bookCtrl.addRating);

module.exports = router;