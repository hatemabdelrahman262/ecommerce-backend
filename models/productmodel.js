const mongoose=require("mongoose")
const productschema = new mongoose.Schema({
    name:{type:String,min:[2,"name cannot be less two letters"],required:[true,"name required"],trim:true},
    price:{type:Number,min:[0,"price cannot be negative"]},
    date:{type:Date,default:Date.now()}
    
})
const product=mongoose.model("product",productschema)
module.exports = product;

