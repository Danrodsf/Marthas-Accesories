const express = require("express");
const router = express.Router();

// Middlewares
const authJwt = require("../middlewares/Auth");

//Importo modelo de datos
const MessageController = require("../controllers/MessageController");

router.post("/create", authJwt, MessageController.create);

router.put("/update", authJwt, MessageController.update);

router.get("/", authJwt, MessageController.getAll);

router.post("/getByUser", authJwt, MessageController.getByUserId);

router.delete("/delete", authJwt, MessageController.delete);

module.exports = router;
