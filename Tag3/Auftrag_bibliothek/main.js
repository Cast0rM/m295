const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const books = new Set([{
    isbn: "123",
    title: "HelloWorld",
    year: 2022,
    author: "JKRowling"
},
{
    isbn: "1234",
    title: "HelloWorl21",
    year: 2032,
    author: "Castor"
},
{
    isbn: "12345",
    title: "HelloWorld31",
    year: 2042,
    author: "CastoMr"
},
{
    isbn: "123123",
    title: "HelloWorld41",
    year: 2002,
    author: "Castor M"
},
{
    isbn: "123456",
    title: "HelloWorl5d1",
    year: 2015,
    author: "Castor MA"
},
])

const jsonHelper = bodyParser.json()

app.get('/books', (req, res) => {

    res.send(200, Array.from(books))
})

app.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn
    const book = Array.from(books).find(element => element.isbn === isbn)
    res.send(200, book);
})

app.post('/books', jsonHelper, (req, res) => {
    const book = req.body
    books.add(book)
    res.send(`${book.isbn}\n ${book.title}`)
})

app.put('/books/:isbn', jsonHelper, (req, res) => {
    const isbn = req.params.isbn
    const merge = req.body
    const book = Array.from(books).find(element => element.isbn == isbn)
    if (book != null && isbn != null) {

        const result = Object.assign(merge, book)

        books.add(result)
        books.delete(book)

        res.send(result)
    }
    else if (!book || !isbn) {
        res.sendstatus(404)
    }
    else {
        res.sendStatus(400)
    }
})

app.delete('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn
    const book = Array.from(books).find(element => element.isbn == isbn);
    if (book) {

        books.delete(book);
        res.sendStatus(200)
    }
    else {
        res.sendStatus(404)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})