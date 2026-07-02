const mongoose=require("mongoose")
const productschema = new mongoose.Schema({
    name:{type:String,min:[2,"name cannot be less two letters"],required:[true,"name required"],trim:true},
    price:{type:Number,min:[0,"price cannot be negative"]},
    date:{type:Date,default:Date.now()}
    
})
const product=mongoose.model("product",productschema)

async function findProduct(name,price){
    try{
        const foundProduct = await product.find(
            {name:String(name),price:price})
            console.log("product found successfully",foundProduct)
            return foundProduct

    }catch(err){((err)=>{console.error(err.message)})}
}

async function createnew(name,price){
    try{
        const newProduct =await product.create(
        {name:String(name),price:price})
        console.log("product created successfully",newProduct)
        return newProduct
    }
    catch(err){(err)=>{console.error(err.message)}}
}

async function updateProduct(name,price,id){
    try{
         const updatedProduct =await product.findByIdAndUpdate((id),{name:String(name),price:price}
         ,{ new: true, runValidators: true })
         console.log("product created successfully",updatedProduct)
         return updatedProduct

    }catch{((err)=>{console.error(err.message)})}
}
async function deleteProduct(id){
    try{
        const deletedProduct =await product.findByIdAndDelete(id);
        console.log("product deleted successfully",deletedProduct);
        return deletedProduct;
    }catch{((err)=>{console.error(err.message)})}
}

module.exports={findProduct,createnew,updateProduct,deleteProduct}