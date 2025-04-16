const express = require('express');
const { loginController, registerController } = 
require('../controllers/userController');

//router objects
const router = express.Router()

//routers
//POST || Login
router.post('/login', loginController )

//POST || Login
router.post('/register', registerController)

module.exports = router