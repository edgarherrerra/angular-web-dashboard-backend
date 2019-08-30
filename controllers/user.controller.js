const User = require('../models/User')

// Obteniendo al usuario y populado los field todos y cards para poder acceder a los datos.
exports.getUser = async (req, res, next) => {
  const id = req.user._id

  try {
    const user = await User.findById(id).populate("todos").populate("cards")
    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error })
  }
}