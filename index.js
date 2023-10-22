// import express from "express"
const express = require('express') 
const AppRoutes = require('./src/routes')
// import AppRoutes from './src/routes/index.js'
const app = express()

app.use(express.json())
app.use('/',AppRoutes)


app.listen(8005,()=>console.log("Server listening to port 8005"))