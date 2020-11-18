const jwt = require("jsonwebtoken");

function authR(req, res, next) {
  let jwtToken = req.header("Authorization");
  jwtToken = jwtToken.split(" ")[1];
  if (!jwtToken) return res.status(400).send("there isn't token for verify");
  try {
    const payload = jwt.verify(jwtToken, "passw");
    req.rest = payload;
    next();
  } catch (error) {
    res.status(400).send("invalid token, without authorization to process");
  }
}


module.exports = authR;