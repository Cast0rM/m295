const express = require("express")
const app = express()
const port = 3000
const namen = new Array('Leunam', 'Manuel', 'Lucas', 'Mario', 'Fletcher', 'Fahad', 'Osian', 'Kate', 'Leia', 'Andy', 'Ria', 'Hope', 'Usman', 'Kyron', 'Myron', 'Kobe', 'Maryam', 'Mason', 'Albert', 'Declan')


app.get('/', (req, res) => {
    res.send("hello world!")
})

app.get('/now', (req, res) => {
    var date = new Date()
    var stunden = date.getHours()
    var minuten = date.getMinutes()
    res.send(`Es ist gerade ${stunden}:${minuten} Uhr`)
})

app.get('/zli', (req, res) => {
    const url = "https://www.zli.ch"
    res.redirect(302, url)

    // response.statusCode = 302;
    // response.setHeader("Location", to)
    // response.setHeader("Location", url).sendStatus(302)
})

app.get('/name', (req, res) => {
    var rand = Math.trunc(Math.random() * namen.length)
    res.send(200, `Hallo ${namen[rand]}`)

    // const nameRand = namen[Math.floor(Math.Random()*namen.length)]
    // res.send(nameRand)
    // || res.send(`Hallo ${nameRand}`)
})

app.get('/html', (req, res) => {

    res.sendFile(__dirname + '/index.html')
})

app.get('/image', (req, res) => {

    res.sendFile(__dirname + '/tree.jpg')
})

app.get('/teapot', (req, res) => {
    res.sendStatus(418)
})

app.get('/user-agent', (req, res) => {
    const userAgent = req.headers['user-agent']
    res.send(`Du nutzt: ${userAgent}`)
})

app.get('/secret', (req, res) => {
    res.sendStatus(401)
})

app.get('/xml', (req, res) => {
    res.sendFile(__dirname + '/server.xml')
})

app.get('/me', (req, res) => {
    res.sendFile(__dirname + '/me.json')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})