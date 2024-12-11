const jwt = require("jsonwebtoken");

function UserId(token) {
  const user = jwt.verify(token, process.env.SECRET_KEY);

  return user.user;
}

module.exports = {
  UserId,
};
