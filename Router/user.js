const express = require('express');
const userRoute = express.Router();

const { getUser, userHome, loginPage, loginNavbar } = require('../controller/userController');

userRoute.get('/', userHome)
userRoute.get('/loginNavbar', loginNavbar)
userRoute.post('/login', loginPage)


module.exports = userRoute;