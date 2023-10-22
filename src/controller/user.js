// import userModel from '../models/user.js'
const userModel = require('../models/user')
// const getUser=(req,res)=>{
// res.status(200).send({
//     message:"get user"
// })
// }
const getUsers = async(req,res)=>{
    try {
         let users = await userModel.find()
         res.status(200).send({
             message:"User Data Fetched Successfully",
             users
         })
    } catch (error) {
     console.log(error)
         res.status(500).send({
             message:"Internal Server Error",
             error:error.message
         })
    }
 }
 const getUserById = async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        res.status(200).send({
            message:"User Fetched Successfully",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

 const create = async(req,res)=>{
    try {
        let user= await userModel.create(req,res)
      
        res.status(201).send({
            message:"data create sussfull"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
    }



module.exports ={
    getUsers,
    getUserById,
    create
}