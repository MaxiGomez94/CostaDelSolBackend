const {Router} = require('express')
const { createUser , loginUser, logoutUser, getUser } = require('../controllers/user.controllers')

const route = Router()

route.post('/create', createUser )

route.post('/login', loginUser)

route.get('/get-user', getUser)

route.get('/logout',logoutUser)

module.exports = route
