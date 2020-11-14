const express = require('express')
const app = express()
const db = require('./models/index.js')

//body parser middleware
app.use(express.urlencoded({ extended: false }))
//middleware for update/delete routes
app.use(methodOverride('_method'))

// GET /books - list all books



// POST /books - create an entry for a new book



// GET /books/:id - show a specific book



// DELETE /books/:id - delete a specific book