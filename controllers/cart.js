const Cart = require("../models/cartmodel")
const express = require("express")
const {findProduct,createnew,updateProduct,deleteProduct,search,searchByName} = require("../controllers/products")
const product = require("../models/productmodel")

async function getCart(next){
    try{
        const cart = await Cart.find({})
            console.log("product found successfully",cart)
            return cart

    }catch(err){next(err)}
}
async function searchCart(id){
    try{
        const cart = await Cart.findById(String(id))
            console.log("product found successfully",cart)
            return cart

    }catch(err){next(err)}
}

async function add(name,quantity){
    try{
       const cartProduct = await product.findOne(
                {name:String(name)})
                console.log("first output:",cartProduct)
                Cart.create({product:cartProduct._id,quantity:quantity})
                return await Cart.findById("6a5412c190a2c338d22b503d").populate("product").select("-_id");
                
    }
    catch(err){console.error(err.message);}
}

module.exports = {getCart,searchCart,add}