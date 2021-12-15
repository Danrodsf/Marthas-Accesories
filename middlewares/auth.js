const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = (req, res, next) => {
  console.log(req.headers);

  // Check for token's existence
  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Unauthorized Access" });
  } else {
    // Check for token's validity
    let token = req.headers.authorization.split(" ")[1];
    // Validate token
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        res.status(500).json({
          msg: "There was a problem decoding the token",
          err,
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};
