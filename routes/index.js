const express = require('express')
const router = express.Router()
const { getHome } = require('../controllers')
const { getUser } = require('../controllers/user.controller')
const { verifyToken } = require('../config/jwt')


// GET Home page
router.get('/', getHome)

// Ruta para obtener los datos del usuario.
router.get('/user', verifyToken, getUser)

module.exports = router
