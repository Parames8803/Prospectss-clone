
// import the verify helper function 
const { verifyToken } = require('../helpers/token');
const { User } = require('../models')

// definning the authMiddleware function
const authMiddleware = async (req, res, next) => {

  // parsing the token from the request headers
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  // Retrieve the token from the cookie
  // const token = req.cookies.session_u_token;
  // if !token then send the error 
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided' });
  }
  try {
    // else fetch the user from the token and
    // send it in the request and call callback function
    const decoded = verifyToken(token); // Decoded : { id: 1, role: 1, iat: 1687967772, exp: 1688054172 }
    let userId = decoded.id
    const user = await User.findAll({ where: { id: userId } })
    // console.log(user[0].id)
    let userToken = user[0].u_token;
    if (userToken === null) {
      res.status(401).json({ message: 'Please Login...' })
    } else {
      req.user = decoded;
      next()
    }

  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authMiddleware;
