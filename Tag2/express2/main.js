const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const namen = new Array('Leunam', 'Manuel', 'Lucas', 'Mario', 'Fletcher', 'Fahad', 'Osian', 'Kate', 'Leia', 'Andy', 'Ria', 'Hope', 'Usman', 'Kyron', 'Myron', 'Kobe', 'Maryam', 'Mason', 'Albert', 'Declan')

const formHelper = bodyParser.urlencoded({ extended: true })
const jsonHelper = bodyParser.json()

app.get('/', (req, res) => {
    res.send("hello world!")
})

app.get('/now', (req, res) => {
    const timeZoneQuery = req.query.tz
    var date = new Date().toLocaleTimeString('de-CH', { timeZone: timeZoneQuery })

    res.send(`hier ist ${date}`)
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form', formHelper, (req, res) => {
    const name = req.body.name
    namen.push(name)
    res.send(`Namen: ${namen}`)
})

// app.post('/form', jsonHelper, (req, res) => {
//     const name = req.body.name
//     res.send(`Hallo ${name}`);
// })

app.get('/name', (req, res) => {
    res.send(`${namen}`)
})

app.delete('/name', formHelper, (req, res) => {
    const name = req.body.name;
    const index = namen.indexOf(name);
    if (index > -1) {
        namen.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

// app.get('/secret', (req, res) => {
//     res.sendStatus(401)
// })

// app.get('/chuck', (req, res) => {
//     const name = req.query.name
//     const url = 'https://api.chucknorris.io/jokes/random'
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             result = data.value
//         })
//     res.send(`Witz ${result}`)
// })

// app.get('/me', (req, res) => {
//     const me = {
//         vorname: "Castor Manuel",
//         nachname: "Fernández Lado",
//         alter: 18,
//         wohnort: "Zürich-CH",
//         augenFarbe: "Braun-Grün"
//     }
//     res.json(me)

//     // res.sendFile(__dirname + '/me.json')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})