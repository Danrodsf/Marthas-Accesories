const express = require("express");
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/Auth");

//Importo modelo de datos
const AdminController = require("../controllers/AdminController");

router.post("/signIn", AdminController.signIn);

router.post("/signUp", authJwt, AdminController.signUp);

router.put("/update", authJwt, AdminController.update);

router.delete("/delete", authJwt, AdminController.delete);

module.exports = router;
