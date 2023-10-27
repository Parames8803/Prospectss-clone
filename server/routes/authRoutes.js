
// importing the package dependencies for router
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const forgotController = require('../controllers/forgotController');
const restoreId = require('../controllers/restoreId')

// routes as a array of object for shortlisting 
// the path and send the request to the corresponding 
// function in controller
const routes = [
    {
        path: '/register',
        methods: { POST: authController.register }
    },
    {
        path: '/login',
        methods: { POST: authController.login }
    },
    {
        path: '/forgotPass/email',
        methods: { POST: forgotController.verifyEmail }
    },
    {
        path: '/restore/:id',
        methods: { POST: restoreId }
    },{
        path: '/forgotPass/otp',
        methods: { POST: forgotController.verifyOtp }
    },{
        path: '/forgotPass/reset',
        methods: { POST: forgotController.resetPassword }
    },
];

// filter the final corresponding controller function using 
// foreach loop by passing path and methods as argument
routes.forEach(route => {
    Object.entries(route.methods).forEach(([method, controller]) => {
        router[method.toLowerCase()](route.path, (req, res, next) => {
            controller(req, res, next);
        });
    });
});


module.exports = router;
