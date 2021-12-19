const express = require("express");
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/Auth");

//Importo modelo de datos
const OrderController = require("../controllers/OrderController");

router.post("/create", authJwt, OrderController.create);

router.put("/update", authJwt, OrderController.update);

router.get("/", authJwt, OrderController.getAll);

router.get("/getByUser", authJwt, OrderController.getByUserId);

router.delete("/delete", authJwt, OrderController.delete);

module.exports = router;
