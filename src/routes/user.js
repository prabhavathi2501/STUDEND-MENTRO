// 
const express = require('express')
const UserController = require('../controller/user')
const router = express.Router()

router.get('/',UserController.getUsers)
router.get('/:id',UserController.getUserById)
router.get('/',UserController.allmentors)
router.post('/',UserController.create)


// e
module.exports = router