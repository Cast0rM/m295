const express = require("express")
const session = require("express-session")
const app = express()
const port = 3000

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

app.post('/name/:name', (req, res) => {
    const newName = req.params.name
    req.session.cookieName = newName
    res.send(201, `Cookie ${req.session.cookieName} created`)
})

app.get('/name', (req, res) => {
    cookieName = req.session.cookieName
    res.send(200, `Cookie: ${cookieName}`)
})

app.delete('/name', (req, res) => {
    delete req.session.cookieName
    res.send(204, `Cookie ${req.session.cookieName} deleted successfully`)
})

app.listen(port)