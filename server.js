require('dotenv').config()
const express = require('express')
const app = express()
const connectdb = require('./config/mongoDBConfig')
connectdb();
app.use(express.json())
const userRouter = require('./routes/userRouter')
app.use('/', userRouter)

app.listen(process.env.PORT, console.log('Listening...'))
