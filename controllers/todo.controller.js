const Todo = require('../models/Todo')
const User = require('../models/User')

// Creando una nueva tarea. 
// Al momento de guardarla en la base de datos, guardamos una referencia en el modelo User para poder mostrar los todos del User.
exports.createTodo = async (req, res, next) => {
  const id = req.user._id
  try {
    const todo = await Todo.create({ ...req.body })
    await User.findByIdAndUpdate(id, { $push: { todos: todo._id } }, { new: true, useFindAndModify: false })
    res.status(201).json({ todo })
  }
  catch (err) {
    res.status(500).json({ err })
  }
}

// Obtener un todo por su id.
exports.getOneTodo = async (req, res, next) => {
  const id = req.params.id
  try {
    const todo = await Todo.findById(id)
    res.status(201).json({ todo, msg: "done!" })
  } catch (error) {
    res.status(500).json({ error })
  }
}


// Eliminando una tarea. Cuando la eliminamos también se elimina la referencia en el Usuario.
exports.deleteTodo = async (req, res, next) => {
  const idUser = req.user._id
  const id = req.params.id
  try {
    const todoDeleted = await Todo.findByIdAndDelete(id)
    await User.findByIdAndUpdate(idUser, { $pull: { todos: id } }, { new: true, useFindAndModify: false })
    res.status(201).json({ todoDeleted, msg: "Deleted!" })
  } catch (error) {
    res.status(500).json({ error })
  }
}

// Actualizando un TODO.
exports.updateTodo = async (req, res, next) => {
  const { id } = req.params

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { ...req.body }, { new: true, useFindAndModify: false })
    res.status(201).json({ updatedTodo })
  } catch (error) {
    res.status(500).json({ error })
  }
}
