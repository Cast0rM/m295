const express = require("express")
const app = express()
const port = 3000
const date = new Date().toLocaleDateString("de-CH", { timeZone: "Europe/Zurich" })
let lends = [
    {
        id: 123,
        customer_id: "A1",
        isbn: 97896452321,
        borrowed_at: date,
        returned_at: ""
    },
    {
        id: 12345,
        customer_id: "a2B1",
        isbn: 978964521899,
        borrowed_at: date,
        returned_at: ""
    },
    {
        id: 12354231,
        customer_id: "a2Bc2",
        isbn: 9789645218988,
        borrowed_at: date,
        returned_at: ""
    },
]

app.use(express.json())

app.get('/lends', (req, res) => {
    res.json(lends)

})

app.get('/lends/:id', (req, res) => {
    const id = req.params.id
    const lend = lends.find(l => l.id == id)

    if (!lend) return res.sendStatus(404)

    res.json(lend)

})

app.post('/lends', (req, res) => {
    const newLend = req.body

    if (isValid(newLend)) {
        lends.push(newLend)
        res.json(newLend)
    }
    else {
        res.sendStatus(422)
    }
})

app.patch('/lends/:id', (req, res) => {
    const id = req.params.id
    const lendIndex = lends.findIndex(l => l.id == id)
    const lendUpdate = req.body

    if (lendIndex < 0) {
        return res.sendStatus(404)
    }
    if (!isValid(lendUpdate)) {
        return res.sendStatus(422)
    }

    const result = Object.assign(lends[lendIndex], lendUpdate)
    res.status(200).json(lendUpdate)

})


function isValid(lend) {
    return lend.id != undefined && lend.id != "" &&
        lend.customer_id != undefined && lend.customer_id != "" &&
        lend.isbn != undefined && lend.isbn != "" &&
        lend.borrowed_at != undefined && lend.borrowed_at != ""
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})