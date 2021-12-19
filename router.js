const router = require("express").Router();

//Importamos Routes definidas en views

const UserRouter = require("./views/UserRouter");
const AdminRouter = require("./views/AdminRouter");
const MessageRouter = require("./views/MessageRouter");
const OrderRouter = require("./views/OrderRouter");

//Rutas
router.use("/user", UserRouter);
router.use("/admin", AdminRouter);
router.use("/message", MessageRouter);
router.use("/order", OrderRouter);

module.exports = router;
