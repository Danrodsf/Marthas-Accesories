const express = require("express");
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/Auth");

//Importo modelo de datos
const ProductController = require("../controllers/ProductController");

router.post("/create", authJwt, ProductController.create);

router.put("/update", authJwt, ProductController.update);

router.get("/", authJwt, ProductController.getAll);

router.get("/random", ProductController.getRandom);

router.post("/getById", authJwt, ProductController.getById);

router.delete("/delete", authJwt, ProductController.delete);

module.exports = router;
