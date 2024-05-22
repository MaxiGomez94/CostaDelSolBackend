const User = require("../models/user.model")

const createUserService = async(user)=>{
    const newUser = new User(user)
    await newUser.save()
    return newUser
}

const getByEmailService= async(email)=>{
    return User.findOne({email})
}

module.exports = {createUserService, getByEmailService}