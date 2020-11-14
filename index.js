require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models/index.js')

//body parser middleware
app.use(express.urlencoded({ extended: false }))


// GET /books - list all books
app.get('/books', (req, res)=> {
    res.send('HITTING ALL BOOKS ROUTE')
})

// POST /books - create an entry for a new book
app.post('/books', (req, res)=> {
    res.send('HITTING POST BOOK ROUTE')
})

// GET /books/:id - show a specific book
app.get('/books/:id', (req, res)=> {
    res.send('HITTING SPECIFIC BOOK ROUTE')
})

// DELETE /books/:id - delete a specific book
app.delete('/books/:id', (req, res) => {
    res.send('HITTING DELETE BOOK ROUTE')
})

let server = app.listen(process.env.PORT || 8000, function() {
    console.log(`you're listening to the smooth sounds of port ${process.env.PORT}`)
})

module.exports = server