const router = require('express').Router()
const { createCard, deleteCard, updateCard, getOneCard } = require('../controllers/card.controller')
const { verifyToken } = require('../config/jwt')

// Rutas para crear una nueva tarjeta, actualizarlo y eliminarlo.
router.post('/new', verifyToken, createCard)
router.delete('/:id', verifyToken, deleteCard)
router.get('/:id', getOneCard)
router.post('/update/:id', updateCard)

module.exports = router