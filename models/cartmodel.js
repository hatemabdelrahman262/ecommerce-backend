const mongoose=require("mongoose")
const product = require("./productmodel.js")
const {Schema} = mongoose
const cartschema = new mongoose.Schema({
    type:{type:String,default:"cartItem"},
    product:{type:Schema.Types.ObjectId,ref:'product'},
    quantity:{type:Number,min:0,required:true}
    
},
    {timestamps:true})
const Cart=mongoose.model("Cart",cartschema)
module.exports = Cart;