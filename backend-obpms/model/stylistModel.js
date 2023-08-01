const mongoose = require('mongoose')

const stylistSchema = new mongoose.Schema({
    title:String,
    phone: Number,
    parlour:{
        type:mongoose.Schema.ObjectId,
        ref:'Service'
    },
},{
   toJSON:{
       virtuals:true
   } ,
   toObject:{
       virtuals:true
   }
})




const Stylist = mongoose.model('Stylist',stylistSchema)
module.exports = Stylist;