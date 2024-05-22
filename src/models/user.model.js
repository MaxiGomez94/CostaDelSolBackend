const { Schema, model}=require('mongoose')

const userSchema= new Schema({
    firstname: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    lastname:  {
        type: String,
        required: [true, "El apellido es obligatorio"]
    },
    email :{
        type: String,
        required :[true,'El email es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true ,'La contraseña es obligatoria']
    },
    role:  {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})

module.exports = model("User", userSchema)