const jwt = require('jsonwebtoken')

const JWT_SECRET = require('../utils/config')

function authorize(req, res, next){
  const {authorization} = req.headers

  if (!authorization || !authorization.startsWith("Bearer ")){
    return res.status(401).send({message: "Unauthorized"})
  }

  const token = authorization.replace("Bearer ", '');
  let payload

  try {
    payload = jwt.verify(token, JWT_SECRET)
  } catch (err) {
    return res.status(401).send({message: "Unauthorized"})
  }

  req.user = payload;
  return next();
}

module.exports = authorize;