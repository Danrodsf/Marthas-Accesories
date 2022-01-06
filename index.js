const express = require("express");
const morgan = require("morgan");
const logger = require("./config/winston");
const db = require("./db.js");
const router = require("./router.js");
const cors = require("cors");
const { version } = require("winston");

const app = express();
const PORT = process.env.PORT || 3005; //Heroku Port Config

//Config Cors Options
var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

//Middleware
app.use(morgan("combined", { stream: logger.stream }));
app.use(express.json());
app.use(cors(corsOptions)); //Add CORS Middleware

//Routes
app.get("/", (req, res) => {
  res.send("Martha's Accesories Api");
});

app.use(router);

//Connecting to the database
db.then(() => {
  //Starting server
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}).catch((err) => console.log(err.message));
