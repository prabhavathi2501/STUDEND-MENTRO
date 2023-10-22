// import mongoose from 'mongoose'
// import DB from '../common/dbconfig.js'
const mongoose = require('mongoose')
const DB = require('../common/db.config')

try {
    mongoose.connect(`${DB.dbUrl}/${DB.dbName}`)
    console.log("data connet")
} catch (error) {
    console.log(error)
}

// export default mongoose
module.exports=mongoose