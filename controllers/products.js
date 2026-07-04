const product = require("../models/productmodel")
const express = require("express")
async function findProduct(name,price,next){
    try{
        const foundProduct = await product.find(
            {name:String(name),price:price})
            console.log("product found successfully",foundProduct)
            return foundProduct

    }catch(err){next(err)}
}
async function search(regex){
    try{
        //edit it to {name:{$regex:"^"+String(regex) ,$options:"i"}} if you want to only get mayches that match only the first letter of product 
        const searched = await product.find({name:{$regex:String(regex) ,$options:"i"}});
        return searched;
    }
        
    catch(err){console.error(err.message)}}

async function findProduct(name,price,next){
    try{
        const foundProduct = await product.find(
            {name:String(name),price:price})
            console.log("product found successfully",foundProduct)
            return foundProduct

    }catch(err){next(err)}
}
async function searchByName(regex){
    try{
        //edit it to {name:{$regex:"^"+String(regex) ,$options:"i"}} if you want to only get mayches that match only the first letter of product 
        const searched = await product.find({name:{$regex:String(regex) ,$options:"i"}}).select("name price").limit(5);
        return searched;
    }
        
    catch(err){console.error(err.message)}}

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

module.exports={findProduct,createnew,updateProduct,deleteProduct,search,searchByName}