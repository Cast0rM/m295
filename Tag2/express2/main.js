const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const namen = new Set('Leunam', 'Manuel', 'Lucas', 'Mario', 'Fletcher', 'Fahad', 'Osian', 'Kate', 'Leia', 'Andy', 'Ria', 'Hope', 'Usman', 'Kyron', 'Myron', 'Kobe', 'Maryam', 'Mason', 'Albert', 'Declan')
const me = {

    vorname: "Castor Manuel",
    nachname: "Fernández Lado",
    alter: 18,
    wohnort: "Zürich-CH",
    augenFarbe: "Braun-Grün"
}

const formHelper = bodyParser.urlencoded({ extended: true })
const jsonHelper = bodyParser.json()

app.get('/', (req, res) => {
    res.send("hello world!")
})

app.get('/now', (req, res) => {
    const cultureInfo = req.query.lang
    const timeZoneQuery = req.query.tz

    if (cultureInfo = null) {
        cultureInfo = 'de-CH'
    }

    var date = new Date().toLocaleTimeString(cultureInfo, { timeZone: timeZoneQuery })

    res.send(`hier ist ${date}`)
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.get('/names', (req, res) => {
    res.send(Array.from(namen))
})

app.post('/names', formHelper, (req, res) => {
    const name = req.body.name
    namen.add(name)
    res.sendStatus(201)
})

app.delete('/names', formHelper, (req, res) => {
    const name = req.body.name;
    const index = namen.indexOf(name);

    if (index > -1) {
        namen.splice(index, 1);
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }


    // if (namen.has(name)) {
    //     // namen.delete(name)
    //     // res.sendstatus(204)
    // }
    // else {
    //     res.sendStatus(404)
    // }
});

app.get('/secret2', (req, res) => {
    const data = req.headers.authorization;
    const auth = "Basic aGFja2VyOjEyMzQ="

    if (data == auth) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(401)
    }

    // const header = req.headers['authorization']; || const data könnte es auch so aussehen
})

// Um zu sehen was headers beinhaltet:
// app.get('/headers', (req, res) => {
//     res.json(req.headers)
// })

app.get('/chuck', /*async*/(req, res) => {
    const name = req.query.name
    const url = `https://api.chucknorris.io/jokes/random?name=` + name

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            result = data.value
            res.send(`${result}`)
        })
    // Other forms to do it
    // const response = await fetch(url)
    // const data = await response.json()
    // const result = data.value
    // res.send(result.replace("Chuck Norris", name))
})

app.get('/me', (req, res) => {
    res.json(me)
})

app.patch('/me', jsonHelper, (req, res) => {
    const merge = req.body
    const result = Object.assign(me, merge)
    // const result = {
    //     ...me,
    //     ...merge
    // }
    res.json(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})