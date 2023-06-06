const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("hello world!")
})

app.get('/now', (req, res) => {
    var date = new Date()
    var stunden = date.getHours()
    var minuten = date.getMinutes()
    res.send(`Es ist ${stunden}:${minuten} Uhr`)
})

app.get('/zli', (req, res) => {

    res.redirect(301, "https://www.zli.ch")
})

app.get('/name', (req, res) => {
    var namen = new Array('Leunam', 'Manuel', 'Lucas', 'Mario', 'Fletcher', 'Fahad', 'Osian', 'Kate', 'Leia', 'Andy', 'Ria', 'Hope', 'Usman', 'Kyron', 'Myron', 'Kobe', 'Maryam', 'Mason', 'Albert', 'Declan')
    var rand = Math.trunc(Math.random() * namen.length)
    res.send(200, `${namen[rand]}`)
})

app.get('/html', (req, res) => {

    res.sendFile(__dirname + '/index.html')
})

app.get('/image', (req, res) => {

    res.sendFile(__dirname + '/tree.jpg')
})

app.get('/teapot', (req, res) => {
    res.send(418, "Teapot")
})

app.get('/user-agent', (req, res) => {
    res.send("User Agent:" + req.headers['user-agent'])
})

app.get('/secret', (req, res) => {
    res.send(403, "Secret")
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