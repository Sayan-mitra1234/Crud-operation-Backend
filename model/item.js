const mongoose=require('mongoose')

const Todoitem=new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

module.exports=mongoose.model('todo',Todoitem)