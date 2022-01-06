//Importo modelo de datos
const db = require("../models");
const orders = db.Order;
const users = db.User;
const orderDetails = db.OrderDetail;
const products = db.Product;

const OrderController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all orders from database
OrderController.getAll = (req, res) => {
  if (req.user.admin) {
    orders
      .findAll({
        include: [{ model: users }, { model: orderDetails }],
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get orders",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET order by id from database
OrderController.getById = (req, res) => {
  if (req.user.admin) {
    orders
      .findAll({
        where: { id: req.body.id },
        include: [
          { model: users },
          { model: orderDetails, include: { model: products } },
        ],
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get orders",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET orders by userId from database
OrderController.getByUserId = (req, res) => {
  const id = req.body.userId;
  if (req.user.admin || req.user.user.id == id) {
    orders
      .findAll({
        where: { userId: id },
        order: [["id", "desc"]],
        include: [
          { model: users },
          { model: orderDetails, include: { model: products } },
        ],
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get orders",
    });
  }
};

//-------------------------------------------------------------------------------------
//CREATE a new order in database
OrderController.create = (req, res) => {
  const id = req.body.userId;
  if (req.user.admin || req.user.user.id == id) {
    orders
      .create({
        userId: id,
        ammount: req.body.ammount,
        shipping: req.body.shipping,
      })
      .then((data) => {
        res.send({ message: "order was created successfully.", data });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    res.send({
      message: "Authorization required to create orders",
    });
  }
};

//-------------------------------------------------------------------------------------
//UPDATE an order from database
OrderController.update = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    orders
      .update(req.body, {
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "order was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update order with id=${id}. Maybe order was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating order with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to edit the order",
    });
  }
};

//-------------------------------------------------------------------------------------
//DELETE an order by Id from database
OrderController.delete = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    orders
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "order was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete order with id=${id}. Maybe order was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete order with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to delete order",
    });
  }
};

module.exports = OrderController;
