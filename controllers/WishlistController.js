//Importo modelo de datos
const db = require("../models");
const wishlist = db.Wishlist;

const WishlistController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all wishlists from database
WishlistController.getAll = (req, res) => {
  if (req.user.admin) {
    wishlist
      .findAll({
        include: [{ all: true }],
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving product from wishlist.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get product wishlist",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET wishlists by userId from database
WishlistController.getByUserId = (req, res) => {
  const id = req.body.userId;
  if (req.user.admin || req.user.user.id == id) {
    wishlist
      .findAll({
        where: { userId: id },
        include: { all: true },
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving product from wishlist.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get product from wishlist",
    });
  }
};

//-------------------------------------------------------------------------------------
//CREATE a new wishlist in database
WishlistController.create = (req, res) => {
  const id = req.body.userId;
  if (req.user.admin || req.user.user.id == id) {
    //First search if record with sames values are not already in DB.
    wishlist
      .findAll({
        where: {
          userId: id,
          productId: req.body.productId,
        },
      })
      .then((data) => {
        if (data == 0) {
          // If "data = 0" means there isn't any record with those same values in DB.
          wishlist
            .create({
              userId: id,
              productId: req.body.productId,
            })
            .then(() => {
              res.send({
                message: "Product was added to the wishlist successfully.",
              });
            })
            .catch((err) => {
              res.status(500).json(err);
            });
        } else {
          // if data > 0 then it means there is already a record with same values in DB.
          res.send({
            message: "You already have that product in your wishlist.",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving products from wishlist.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to add product to wishlist",
    });
  }
};

//-------------------------------------------------------------------------------------
//UPDATE a wishlist from database
WishlistController.update = (req, res) => {
  const id = req.body.id;
  const userId = req.body.userId;
  const productId = req.body.productId;
  if (req.user.admin || req.user.user.id == userId) {
    wishlist
      .findAll({
        where: {
          userId: userId,
          productId: productId,
        },
      })
      .then((data) => {
        if (data == 0) {
          // If "data = 0" means there isn't any record with those same values in DB.
          wishlist
            .update(req.body, {
              where: { id: id },
            })
            .then(() => {
              res.send({
                message: "wishlist was updated successfully.",
              });
            })
            .catch((err) => {
              res.status(500).send({
                message: err.message || "Error updating wishlist with id=" + id,
              });
            });
        } else {
          // if data > 0 then it means there is already a record with same values in DB.
          res.send({
            message: "You already have that product in your wishlist.",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving the product from wishlist.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to update the wishlist",
    });
  }
};

//-------------------------------------------------------------------------------------
//DELETE a wishlist by Id from database
WishlistController.delete = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    wishlist
      .destroy({
        where: { id: id, userId: req.body.userId },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "wishlist was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete wishlist with id=${id}. Maybe wishlist was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete wishlist with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to delete wishlist product",
    });
  }
};

module.exports = WishlistController;
