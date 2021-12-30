const express = require("express");
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/Auth");

//Importo modelo de datos
const OrderDetailController = require("../controllers/OrderDetailController");

router.post("/create", authJwt, OrderDetailController.create);

router.put("/update", authJwt, OrderDetailController.update);

router.get("/", authJwt, OrderDetailController.getAll);

router.post("/getByOrder", authJwt, OrderDetailController.getByOrderId);

router.delete("/delete", authJwt, OrderDetailController.delete);

module.exports = router;
