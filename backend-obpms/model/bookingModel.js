const mongoose = require('mongoose')

const appoimentSchema = new mongoose.Schema({
    userName:String,
    parlourName:String,
    productName:String,
    time:{
        type:Date, 
        default:Date.now()
    },
    takenTime:{
        type:Number,
    },
    date:{
        type:Date,   
    },
    price:Number,
    serviceCompleteTime: Number,
    parlour:{
        type:mongoose.Schema.ObjectId
    },
    user:{
        type:mongoose.Schema.ObjectId
    }
   
})



const Appioment = mongoose.model('Appioment',appoimentSchema)
module.exports = Appioment;