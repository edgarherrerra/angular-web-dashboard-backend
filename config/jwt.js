const jwt = require('jsonwebtoken')

exports.signToken = user => {
  return jwt
    .sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.SECRET,
      { expiresIn: '72h' }
    )
    .split('.')
}