const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World SAccountAPI'))

app.listen(7000, () => console.log("SAccountAPI listening on port 7000"))