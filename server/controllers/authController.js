// importing the requirements such as 
// models and helper functions
const { User } = require('../models');
const { generateToken } = require('../helpers/token');
const { hashPassword, comparePassword } = require('../helpers/hash');
const { Role } = require('../models')
const { Op } = require("sequelize");

// definning the authController with required
// functions such as register and login.
const authController = {
  async register(req, res) {
    // trycatch block for handling the errors
    try {
      // get the user credentials from the frontend 
      const { username, email, password, role } = req.body;

      // check the username which is already exists are not 
      // if exists return the messsage username already exists.
      let checkUser = await User.findAll({
        where: {
          [Op.and]: [
            { u_user_name: username },
            { u_status: 1 }
          ]
        }
      });
      if (checkUser.length > 0) {
        res.status(500).json({ message: 'Username already exists' });
      } else {
        // if username not exists then fetch the role id from the model
        // according to the user role from frontend 
        let findRoleid = await Role.findAll({ where: { role: role } })
        let roleId = findRoleid[0].id
        // after get the particular role id then hash the password using helper
        const hashedPassword = await hashPassword(password);
        // create the user by inserting the values from the frontend 
        // includes the hashed password and roleid
        const user = await User.create({ u_user_name: username, u_user_email: email, u_user_pass: hashedPassword, roleId: roleId });
        res.status(200).json({ message: 'User registered successfully' });
      }
    } catch (error) {
      console.log(error)
      res.status(500).json(error);
    }
  },

  async login(req, res) {
    try {
      // get the user credentials from the frontend
      const { username, password } = req.body;
      // check the user is already exists are not with the username
      // if not exists there is no user match found.
      const user = await User.findOne({
        where: {
          [Op.and]: [
            { u_user_name: username },
            { u_status: 1 }
          ]
        }
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // if user exists matches the username compare the password with the
      // hashed password in the user model using helper
      const isPasswordValid = await comparePassword(password, user.u_user_pass);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      // generating the token 
      // if only the username and password matches
      // using the helper function and set the token in headers.
      const token = generateToken(user);
      // const expirationTime = new Date(Date.now() + 3600000); 
      await User.update({ u_token: token }, { where: { u_user_name: username } })
      res.set('Authorization', `Bearer ${token}`);
      // res.cookie('session_u_token', token, {
      //   expires: new Date(expirationTime),
      // })
      res.status(200).json({ message: "login sucessfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  async logOut(req, res) {

    try {
      const accessRoles = ['admin', 'user'];
      const user = req.user;
      const userRoleId = user.role
      const userId = user.id
      let findRole = await Role.findAll({ where: { id: userRoleId } })
      const role = findRole[0].role

      if (accessRoles.includes(role)) {
        res.set('Authorization', '');
        await User.update({ u_token: null }, { where: { id: userId } })
        res.send({ message: "logout sucess" })
      } else {
        res.status(401).json({ message: 'Unauthorized User...' })
      }
    } catch (error) {
      console.log(error)
    }
  }
};

module.exports = authController;

