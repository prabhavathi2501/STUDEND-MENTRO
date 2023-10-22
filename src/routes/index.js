// import express from 'express'
// import UserRoutes from './user.js'
const express = require('express')
const router = express.Router()
const UserRoutes = require('./user')
router.use('/user',UserRoutes)

// export default router
module.exports=router