const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");


// POST /api/auth/signup
router.post("/api/auth/signup", userCtrl.signup);

// POST /api/auth/login
router.post("/api/auth/login", userCtrl.login);

module.exports = router;