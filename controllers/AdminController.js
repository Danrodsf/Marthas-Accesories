const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const db = require("../models");
const admin = db.Admin;

const AdminController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//Login user with database
//get user
AdminController.signIn = (req, res) => {
  let { email, password } = req.body;
  // Buscar usuario
  admin
    .findOne({
      where: { email: email },
    })
    .then((admin) => {
      if (!admin) {
        res.status(404).json({ msg: "email not found in admin" });
      } else {
        if (bcrypt.compareSync(password, admin.password)) {
          // Creamos el token
          let token = jwt.sign({ admin: admin }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });

          res.json({
            admin: admin,
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
//create user
AdminController.signUp = (req, res) => {
  // Encriptamos la contraseña
  let password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
  );

  admin
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: password,
    })
    .then(() => {
      res.send({
        message: "Admin was created successfully.",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//-------------------------------------------------------------------------------------
//UPDATE an Admin from database
AdminController.update = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    let password = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );
    admin
      .update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: password,
        },
        { where: { id: id } }
      )
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Admin was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating Admin with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Privileges are requiered to update Admin.",
    });
  }
};

//-------------------------------------------------------------------------------------
//DELETE a Admin in database
AdminController.delete = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    admin
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Admin was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete Admin with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to delete admin",
    });
  }
};

module.exports = AdminController;
