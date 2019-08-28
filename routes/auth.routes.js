const router = require('express').Router()
const { signup, login, logout } = require('../controllers/auth.controller')
const passport = require('../config/passport')

router.post('/signup', signup)

router.post('/login', passport.authenticate('local'), login)

router.get('/logout', logout)

module.exports = router