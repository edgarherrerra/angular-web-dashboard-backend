require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('./config/passport')
const index = require('./routes/index')
const authRoutes = require('./routes/auth.routes')
const todoCategories = require('./routes/todo.routes')
const app = express()

// Estableciendo conexión con la base de datos.
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })


// Configuración de Middlewares.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize())
app.use(cors({
  credentials: true,
  origin: process.env.ORIGIN
}));

// Ruta Home.
app.use('/', index)
app.use('/', authRoutes)
app.use('/todo', todoCategories)

// Servidor iniciado.
app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

