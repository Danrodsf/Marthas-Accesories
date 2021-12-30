const express = require("express");
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/Auth");

//Importo modelo de datos
const UserController = require("../controllers/UserController");

router.post("/signIn", UserController.signIn);

router.post("/signUp", UserController.signUp);

router.put("/update", authJwt, UserController.update);

router.get("/", authJwt, UserController.getAll);

router.post("/getById", authJwt, UserController.getById);

router.delete("/delete", authJwt, UserController.delete);

module.exports = router;
