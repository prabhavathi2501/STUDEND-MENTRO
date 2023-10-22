// import mongoose  from './index.js'
const mongoose = require('./index')


const userSchema = new mongoose.Schema({
    // firstName:{type:String,required:[true,"First Name is required"]},
    // lastName:{type:String,required:[true,"Last Name is required"]},
    // email:{type:String,required:[true,"Email is required"]},
    // password:{type:String,required:[true,"Password is required"]},
    // status:{type:Boolean,default:true},
    // role:{type:String,default:'customer'},
    // createdAt:{type:Date, default:Date.now()}
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