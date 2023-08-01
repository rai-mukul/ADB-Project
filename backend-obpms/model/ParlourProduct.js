const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    title:String,
    photo:String,
    desc:String,
    price:Number,
    time:{
        type:Date, 
         default:Date.now
    },
    parlour:{
        type:mongoose.Schema.ObjectId,
        ref:'Admin'
    },
    duration:Number,
},{
   toJSON:{
       virtuals:true
   } ,
   toObject:{
       virtuals:true
   }
})


// serviceSchema.index({'$**':'text'})

// serviceSchema.pre(/find/,async function(next){
//     this.populate({
//         path:'parlour'
//     })
// })


// serviceSchema.post(/find/,async function(next){
//     this.populate({
//         path:'parlour'
//     })
// })


const Service = mongoose.model('Service',serviceSchema)
module.exports = Service;