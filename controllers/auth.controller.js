const User = require('../models/User')
const { signToken } = require('../config/jwt')

exports.signup = (req, res, next) => {
  User.register({ ...req.body }, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }))
}

exports.login = (req, res, next) => {
  const [header, payload, signature] = signToken(req.user)
  res.cookie('headload', `${header}.${payload}.`, {})
  res.cookie('signature', signature, {})
  res.status(200).json({ user: req.user })
}

exports.logout = (req, res, next) => {
  res.clearCookie('headload')
  res.clearCookie('signature')
  res.status(200).json({ message: 'Goodbye!' })
}