const {PORT,MONGO_URI} = require("./config.js")
const express = require("express")
const sanitize = require("mongo-sanitize")
const {connectDB,findProduct,createnew,updateProduct,deleteProduct} = require("./db.js")
const { default: helmet } = require("helmet")

const app=express()
app.use(express.json())
app.use(helmet())
app.post("/products/new",async (req,res,next)=>{
    try{
        const newProduct =await createnew("apple",5)
        res.status(201).json({status:"success",productcreated:newProduct})
    }catch(err){
        next(err)
    }

})
app.get("/products/search",async (req,res,next)=>{
    try{
        const foundProduct =await findProduct("sofa",500)
        res.status(200).json({status:"success",productfound:foundProduct})
    }catch(err){
        next(err)

    }
    
})
app.put("/products/edit/:id",async (req,res,next)=>{
    try{
        const id =sanitize(req.params.id)
        const updatedProduct = await updateProduct("toy",200,id)
        res.status(201).json({status:"successful",update:updatedProduct})
    }catch(err){console.error(err.message);next(err)}
})
app.delete("/products/delete/:id",async (req,res,next)=>{
    try{
        const id = sanitize(req.params.id)
        const deleted =await deleteProduct(id)
        console.log(deleted)
        res.status(200).json({status:"success",productDeleted:deleted})
    }catch(err){next(err)}
})

connectDB(MONGO_URI)
app.listen(PORT,()=>{console.log(`server connected to port ${PORT}`)})

