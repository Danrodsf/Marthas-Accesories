const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const db = require("../models");
const users = db.User;

const UserController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//Login user with database
UserController.signIn = (req, res) => {
  let { email, password } = req.body;
  // Buscar usuario
  users
    .findOne({
      where: { email: email },
    })
    .then((user) => {
      if (!user) {
        res.status(404).json({ msg: "email not found in users" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          // Creamos el token
          let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });

          res.json({
            user: user,
            token: token,
          });
        } else {
          // Unauthorized Access
          res.status(401).json({ msg: "Wrong Password" });
        }
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//-------------------------------------------------------------------------------------
//REGISTER new user in database
UserController.signUp = (req, res) => {
  // Encriptamos la contraseña
  let password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
  );

  users
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      password: password,
    })
    .then(() => {
      res.send({
        message: "User was created successfully.",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//-------------------------------------------------------------------------------------
//UPDATE an User from database
UserController.update = (req, res) => {
  const id = req.body.id;
  if (req.user.admin || req.user.user.id == id) {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password,Number.parseInt(authConfig.rounds)
      );
    }    
    users
      .update(req.body,{ 
        where: { id: id } 
      }
      )
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating User with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to update user.",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET all users from database
UserController.getAll = (req, res) => {
  if (req.user.admin) {
    users
      .findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get other users",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET user by Id from database
UserController.getById = (req, res) => {
  const id = req.body.id;
  if (req.user.admin || req.user.user.id == id) {
    users
      .findByPk(id, { include: { all: true } })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find user with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error retrieving user with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to get other user",
    });
  }
};

//-------------------------------------------------------------------------------------
//DELETE a user in database
UserController.delete = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    users
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete User with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to delete other user",
    });
  }
};

module.exports = UserController;
