const express = require('express');
const router = express.Router();
const {login, signup, getAuthdata} = require('../controller/authController')


router.post('/login',login)
router.post('/signup',signup)
router.get('/getauthdate',getAuthdata)


module.exports =  router;