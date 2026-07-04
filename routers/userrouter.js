const express = require("express")
const sanitize = require("mongo-sanitize")
const {findProduct,createnew,updateProduct,deleteProduct,search} = require("../controllers/products")
const userRouter = express.Router()

userRouter.get("/products/search",async(req,res,next)=>{
    const searched = await search.sanitize((req.query.product))
    res.status(200).json({status:"success",found:searched})
})
userRouter.get("/products/find",async (req,res,next)=>{
    try{
        const foundProduct =await findProduct("laptop",3000)
        res.status(200).json({status:"success",productfound:foundProduct})
    }catch(err){
        next(err)

    }})

    module.exports= userRouter
