// import mongoose  from './index.js'
const mongoose = require('./index')


const userSchema = new mongoose.Schema({
    
    firstName:String,
    lastName:String,
    email:String,
    rollno:Number,
   password:String

},{
    collection:'user',
    versionKey:false
})

const userModel = mongoose.model('users',userSchema)
// export default userModel
module.exports = userModel