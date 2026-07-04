const express = require("express")
const sanitize = require("mongo-sanitize")
const {findProduct,createnew,updateProduct,deleteProduct,search,searchByName} = require("../controllers/products")
const adminRouter = express.Router()
adminRouter.get("/products/searchByName",async(req,res,next)=>{
    const searched = await searchByName(req.query.product)
    res.status(200).json({found:searched})
})
adminRouter.get("/products/search",async(req,res,next)=>{
    const searched = await search(req.query.product)
    res.status(200).json({found:searched})
})
adminRouter.get("/products/find",async (req,res,next)=>{
    try{
        const foundProduct =await findProduct("laptop",3000)
        res.status(200).json({status:"success",productfound:foundProduct})
    }catch(err){
        next(err)
}})

adminRouter.put("/products/edit/:id",async (req,res,next)=>{
    try{
        const id =sanitize(req.params.id)
        const updatedProduct = await updateProduct("toy",200,id)
        res.status(201).json({status:"successful",update:updatedProduct})
    }catch(err){console.error(err.message);next(err)}
})
adminRouter.delete("/products/delete/:id",async (req,res,next)=>{
    try{
        const id = sanitize(req.params.id)
        const deleted =await deleteProduct(id)
        console.log(deleted)
        res.status(200).json({status:"success",productDeleted:deleted})
    }catch(err){next(err)}
})
adminRouter.post("/products/new",async (req,res,next)=>{
    try{
        const newProduct =await createnew("tablet",10000)
        res.status(201).json({status:"success",productcreated:newProduct})
    }catch(err){
        next(err)
    }

})

module.exports = adminRouter