require('dotenv').config()

const serverConfig={
    port: process.env.PORT || 4000 ,
    mongoUrl: process.env.MONGO_DB_URI
}

module.exports = {serverConfig}