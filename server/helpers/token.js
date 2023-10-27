const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateToken = (user) => {
  const payload = {
    id: user.id,
    role: user.roleId
  };

  const token = jwt.sign(payload, config.secret, { expiresIn: '1d' });
  return token;
}

const verifyToken = (token) => {
  const decoded = jwt.verify(token, config.secret);
  return decoded;
}

module.exports = {
  generateToken,
  verifyToken,
};
