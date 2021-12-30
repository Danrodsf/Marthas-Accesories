const express = require("express");
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/Auth");

//Importo modelo de datos
const WishlistController = require("../controllers/WishlistController");

router.post("/create", authJwt, WishlistController.create);

router.put("/update", authJwt, WishlistController.update);

router.get("/", authJwt, WishlistController.getAll);

router.post("/getByUser", authJwt, WishlistController.getByUserId);

router.delete("/delete", authJwt, WishlistController.delete);

module.exports = router;
