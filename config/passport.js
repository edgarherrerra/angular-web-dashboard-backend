const passport = require('passport')
const User = require('../models/User')

// How to get information from a user object to store in a session (serialize), 
// and how to take that information and turn it back into a user object (deserialize).

// Almacenando al usuario en una sesión y obteniendo al usuario de la base de datos
// con una estrategia local, es decir con username y password.
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = passport