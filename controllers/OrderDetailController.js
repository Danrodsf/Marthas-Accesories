//Importo modelo de datos
const db = require("../models");
const orderDetails = db.OrderDetail;
const product = db.Product;

const OrderDetailController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all orderDetails from database
OrderDetailController.getAll = (req, res) => {
  if (req.user.admin) {
    orderDetails
      .findAll({
        include: [{ model: product }],
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orderDetails.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get orderDetails",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET OrderDetail by orderId from database
OrderDetailController.getByOrderId = (req, res) => {
  if (req.user.admin) {
    orderDetails
      .findAll({
        where: { orderId: req.body.orderId },
        include: [{ model: product }],
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orderDetails.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get orderDetails",
    });
  }
};

//-------------------------------------------------------------------------------------
//CREATE a new OrderDetail in database
OrderDetailController.create = (req, res) => {
  if (req.user.admin || req.user.user) {
    orderDetails
      .create({
        orderId: req.body.orderId,
        productId: req.body.productId,
        quantity: req.body.quantity,
      })
      .then(() => {
        res.send({
          message: "orderDetail was created successfully.",
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    res.send({
      message: "Authorization required to create orderDetails",
    });
  }
};

//-------------------------------------------------------------------------------------
//UPDATE an OrderDetail from database
OrderDetailController.update = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    orderDetails
      .update(req.body, {
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "orderDetail was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update orderDetail with id=${id}. Maybe orderDetail was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating orderDetail with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to edit the orderDetail",
    });
  }
};

//-------------------------------------------------------------------------------------
//DELETE a OrderDetail by Id from database
OrderDetailController.delete = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    orderDetails
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "orderDetail was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete orderDetail with id=${id}. Maybe order was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete orderDetail with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to delete orderDetail",
    });
  }
};

module.exports = OrderDetailController;
