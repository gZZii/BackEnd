const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const multer = require("../middleware/multer-config");


const bookCtrl = require("../controllers/book");


router.get("/", auth, bookCtrl.getAllBooks);
router.get("/:id", auth, bookCtrl.getOneBook);
router.get("/bestRating", auth, bookCtrl.getBestRating);
router.post("/", auth, multer, bookCtrl.createBook);
router.put("/:id", auth, multer, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.post("/:id/rating", auth, bookCtrl.addRating);

module.exports = router;