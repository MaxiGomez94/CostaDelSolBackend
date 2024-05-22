const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const { serverConfig } = require('../config/config')
require("../dbConnection/dbConnection")

const port = serverConfig.port

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

const userRoutes = require('../routes/user.routes')

app.use('/api/users', userRoutes)

app.listen(port,()=>{
console.log(`Servidor en el puerto ${port}`)
})