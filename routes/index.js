const express = require('express')
const router = express.Router()
const { getHome } = require('../controllers')

// GET Home page
router.get('/', getHome)

module.exports = router
