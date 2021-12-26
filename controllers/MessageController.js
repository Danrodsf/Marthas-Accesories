//Importo modelo de datos
const db = require("../models");
const messages = db.Message;
const users = db.User;

const MessageController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all messages from database
MessageController.getAll = (req, res) => {
  if (req.user.admin) {
    messages
      .findAll({ include: [{ model: users }] })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get messages",
    });
  }
};

//-------------------------------------------------------------------------------------
//GET message by userId from database
MessageController.getByUserId = (req, res) => {
  if (req.user.admin || req.user.user.id == id) {
    messages
      .findAll({
        where: { userId: req.body.userId },
        include: [{ model: users }],
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving message.",
        });
      });
  } else {
    res.send({
      message: "Authorization required to get messages",
    });
  }
};

//-------------------------------------------------------------------------------------
//CREATE a new message in database
MessageController.create = (req, res) => {
  if (req.user.user) {
    messages
      .create({
        userId: req.user.user.id,
        message: req.body.message,
      })
      .then(() => {
        res.send({
          message: "Message was created successfully.",
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else if (req.user.admin) {
    messages
      .create({
        userId: req.body.userId,
        message: " ",
        adminId: req.user.admin.id,
        response: req.body.response,
      })
      .then(() => {
        res.send({
          message: "Message was created successfully.",
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    res.send({
      message: "Authorization required to create messages",
    });
  }
};

//-------------------------------------------------------------------------------------
//UPDATE a message from database
MessageController.update = (req, res) => {
  const id = req.body.id;
  if (req.user.admin || req.user.user.id == req.body.userId) {
    messages
      .update(req.body, {
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "message was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update message with id=${id}. Maybe message was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error updating message with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to edit message",
    });
  }
};

//-------------------------------------------------------------------------------------
//DELETE a message by Id from database
MessageController.delete = (req, res) => {
  const id = req.body.id;
  if (req.user.admin) {
    messages
      .destroy({
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "message was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete message with id=${id}. Maybe message was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not delete message with id=" + id,
        });
      });
  } else {
    res.send({
      message: "Authorization required to delete message",
    });
  }
};

module.exports = MessageController;
