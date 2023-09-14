const express=require('express')
const mongoose=require('mongoose')
const doenv=require('dotenv').config()
const cors=require('cors')

const app=express()

app.use(express.json())
const PORT=process.env.PORT || 5000;
app.use(cors())

const TodoItemRoute=require('./routes/todo')

mongoose.connect(process.env.DB_CONNECT)
.then(()=>{console.log('database Connected')})
.catch(err=>{console.log('error')})

app.use('/',TodoItemRoute)

app.listen(PORT,()=>{console.log("Server Connected Successfully")})