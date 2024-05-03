const express = require("express")
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/games', require('./routes/games'));

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))