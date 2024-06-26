const express = require("express")
const app = express()
const { typeError } = require('./middlewares/errors');
const PORT = 3000

app.use(express.json())

app.use('/games', require('./routes/games'));
app.use('/genres', require('./routes/genres'));
app.use('/orders', require('./routes/orders'));
app.use('/users', require('./routes/users'));

app.use(typeError())

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))