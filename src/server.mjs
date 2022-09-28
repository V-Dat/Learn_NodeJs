import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(app)
    res.send('Hello World!')
})

app.get('/info', (req, res) => {
    res.send(`i'm Kevin! 1`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
