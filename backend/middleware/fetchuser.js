var jwt = require("jsonwebtoken");
const JWT_SECRET = "mynameisjeel";

const fetchuser = (req, res, next) => {
  //get user from the jwt token  and  add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate vadild token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate vadild token" });
  }
};

module.exports = fetchuser;
