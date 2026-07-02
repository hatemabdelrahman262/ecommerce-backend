const mongoose=require("mongoose")
const env = require("dotenv").config()
const MONGO_URI=require("./config.js")
const {findProduct,createnew,updateProduct,deleteProduct} = require("./models/productmodel.js")
async function connectDB(MONGO_URI){
    mongoose.connect(MONGO_URI,)
    .then(()=>{console.log("database connected")})
    .catch((err)=>{console.error(err.message)})
}


module.exports = {connectDB,findProduct,createnew,updateProduct,deleteProduct}