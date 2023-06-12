const express = require("express")
const app = express()
const port = 3000
//const date = new Date().toLocaleDateString("de-CH", { timeZone: "Europe/Zurich" })
const date = new Date().toISOString()
app.use(express.json())

let lends = [
    {
        id: 123,
        customer_id: "A1",
        isbn: 97896452321,
        borrowed_at: date, //new Date.toISOString
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

// GET /lends
app.get('/lends', (req, res) => {
    res.json(lends)

})

// GET /lends/id
app.get('/lends/:id', (req, res) => {
    const id = req.params.id
    const lend = lends.find(l => l.id == id)

    if (!lend) return res.sendStatus(404)

    res.json(lend)

})

// POST /lends
app.post('/lends', (req, res) => {
    const newLend = req.body
    newLend.id = lends.length + 1;
    newLend.borrowed_at = date;
    newLend.returned_at = null;
    if (!isValid(newLend)) return res.sendStatus(422)

    lends.push(newLend)
    res.send(newLend)
})

// PATCH /lends/id
app.patch('/lends/:id', (req, res) => {
    const id = req.params.id
    const lendIndex = lends.findIndex(l => l.id == id)
    const lendUpdate = req.body

    if (id != lendUpdate.id) {
        res.sendStatus(422);
    }
    if (lendIndex < 0) return res.sendStatus(404)
    if (!isValid(result, false)) {
        res.sendStatus(422)
    }
    else {
        const result = Object.assign(lends[lendIndex], lendUpdate)
        console.log(result)
        lends.splice(lendIndex, 1, result)
        res.status(200).json(result)
    }
})


function isValid(lend, checkIds = true) {

    return Boolean(lends.find(l => l.id == lend.id)) == false &&
        Boolean(lends.find(l => l.isbn == lend.isbn)) == false &&
        lend.id != undefined && lend.id != "" &&
        lend.customer_id != undefined && lend.customer_id != "" &&
        lend.isbn != undefined && lend.isbn != "" &&
        lend.borrowed_at != undefined && lend.borrowed_at != ""
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})