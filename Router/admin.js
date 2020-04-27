const express = require('express');
const adminRoute = express.Router();
const { getAdmin, adminHome } = require('../controller/adminController')


adminRoute.get('/', adminHome)

module.exports = adminRoute;