
// importing the package requirements
const express = require('express')
const router = express.Router()
const authRoute = require('../routes/authRoutes');
const userRoute = require('../routes/userRoutes');

// middleware for routing
router.use('/auth', authRoute);
router.use('/api', userRoute);

// exporting the router
module.exports = router;




