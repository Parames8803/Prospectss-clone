
// importing the package dependencies for router
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const updateController = require('../controllers/updateController');
const authController = require('../controllers/authController');
const createUser = require('../controllers/createUser');
const getUserDetails = require('../controllers/getUser');
const deleteUserDetails = require('../controllers/deleteUser')

// middleware for authenticating the users
router.use(authMiddleware)

// routes as a array of object for shortlisting 
// the path and send the request to the corresponding 
// finction in controller
const routes = [
  {
    path: '/user',
    methods: {
      GET: getUserDetails.getUser,
      POST: createUser,
      DELETE: deleteUserDetails.deleteUser
    },
  },
  {
    path: '/user/:id',
    methods: {
      GET: getUserDetails.getUserById,
      DELETE: deleteUserDetails.deleteUserById
    }
  },
  {
    path: '/updateName',
    methods: { PUT: updateController.updateUserName }
  },
  {
    path: '/updatePass',
    methods: { PUT: updateController.updatePassword }
  },
  {
    path: '/updateRole',
    methods: { PUT: updateController.updateRole }
  },
  {
    path: '/logout',
    methods: { GET: authController.logOut }
  }
];

// filter the final corresponding controller function using 
// foreach loop by passing path and methods as argument
routes.forEach(route => {
  Object.entries(route.methods).forEach(([method, controller]) => {
    router[method.toLowerCase()](route.path, (req, res) => {
      controller(req, res);
    });
  });
});


module.exports = router;

