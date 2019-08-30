const router = require('express').Router()
const { createTodo, deleteTodo, updateTodo, getOneTodo } = require('../controllers/todo.controller.js')
const { verifyToken } = require('../config/jwt')

// Rutas para crear un nuevo todo, actualizarlo y eliminarlo.
router.post('/new', verifyToken, createTodo)
router.delete('/:id', verifyToken, deleteTodo)
router.get('/:id', getOneTodo)
router.post('/update/:id', updateTodo)

module.exports = router