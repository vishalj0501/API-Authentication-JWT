const express = require('express')

const app = express()
const mongoose= require('mongoose')
const bodyParser= require('body-parser')
const postRoute = require('./routes/posts')

mongoose.connect('mongodb://localhost:27017/rest',()=>{
    console.log('Connected to DB')
})

//Importing Routes 
const authRoute= require('./routes/auth')


app.use(bodyParser.json())


app.use('/api/user/',authRoute)
app.use('/api/posts',postRoute)

app.listen(3000, ()=>{
    console.log("Server started at port 3000") 
})
  