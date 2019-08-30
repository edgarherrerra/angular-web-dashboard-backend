const Card = require('../models/Card')
const User = require('../models/User')

// Creando una nueva tarjeta. 
// Al momento de guardarla en la base de datos, guardamos una referencia en el modelo User para poder mostrar las tarjetas del User.
exports.createCard = async (req, res, next) => {
  const id = req.user._id
  try {
    const card = await Card.create({ ...req.body })
    await User.findByIdAndUpdate(id, { $push: { cards: card._id } }, { new: true, useFindAndModify: false })
    res.status(201).json({ card })
  }
  catch (err) {
    res.status(500).json({ err })
  }
}


// Obtener una tarjeta por su id.
exports.getOneCard = async (req, res, next) => {
  const id = req.params.id
  try {
    const card = await Card.findById(id)
    res.status(201).json({ card, msg: "done!" })
  } catch (error) {
    res.status(500).json({ error })
  }
}


// Eliminando una tarjeta. Cuando la eliminamos también se elimina la referencia en el Usuario.
exports.deleteCard = async (req, res, next) => {
  const idUser = req.user._id
  const id = req.params.id
  try {
    const cardDeleted = await Card.findByIdAndDelete(id)
    await User.findByIdAndUpdate(idUser, { $pull: { cards: id } }, { new: true, useFindAndModify: false })
    res.status(201).json({ cardDeleted, message: "Deleted!" })
  } catch (error) {
    res.status(500).json({ error })
  }
}

// Actualizando una tarjeta.
exports.updateCard = async (req, res, next) => {
  const { id } = req.params

  try {
    const updatedCard = await Card.findByIdAndUpdate(id, { ...req.body }, { new: true, useFindAndModify: false })
    res.status(201).json({ updatedCard })
  } catch (error) {
    res.status(500).json({ error })
  }
}