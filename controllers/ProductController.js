//Importo modelo de datos
const db = require("../models");
const products = db.Product;

const ProductController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all products from database
ProductController.getAll = (req, res) => {
  if (req.user.admin) {
    products
      .findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving products.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get products",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET product by id from database
ProductController.getById = (req, res) => {
  if (req.user.admin) {
    products
      .findAll({
        where: { id: req.body.id },
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving product.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get product",
    });
  }
};

//-------------------------------------------------------------------------------------
//CREATE a new product in database
ProductController.create = (req, res) => {
  if (req.user.admin) {
    products
      .create({
        name: req.body.name,
        category: req.body.category,
        material: req.body.material,
        description: req.body.description,
        color: req.body.color,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
      })
      .then(() => {
        res.send({
          message: "product was created successfully.",
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    res.send({
      message: "Authorization required to create products",
    });
  }
};

//-------------------------------------------------------------------------------------
//UPDATE a product from database
ProductController.update = (req, res) => {
  if (req.user.admin) {
    products
      .update(req.body, {
        where: { id: req.body.id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "product was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating product with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to edit products",
    });
  }
};

//-------------------------------------------------------------------------------------
//DELETE a product by Id from database
ProductController.delete = (req, res) => {
  if (req.user.admin) {
    products
      .destroy({
        where: { id: req.body.id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "product was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete product with id=${id}. Maybe product was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete product with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to delete product",
    });
  }
};

module.exports = ProductController;
