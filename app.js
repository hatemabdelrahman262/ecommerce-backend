//run server then go route:http://localhost:3000/admin/products for the inter face 
// gently asks you to use the admin route not the user route bc it was not tested 
// port and mongo uri were set on default to run on port or 3000 or port:27017



const {PORT,MONGO_URI} = require("./config.js")
const path = require("path")
const express = require("express")
const sanitize = require("mongo-sanitize")
const {connectDB} = require("./db.js")
const userRouter = require("./routers/userrouter.js")
const adminRouter = require("./routers/adminrouters.js")
const {findProduct,createnew,updateProduct,deleteProduct,search} = require("./controllers/products.js")
const { default: helmet } = require("helmet")
const product = require("./models/productmodel.js")

const app=express()
app.use(express.json())
app.use(helmet())
app.use(express.static(path.join(__dirname,'public')));

app.get("/admin/products",async(req,res,next)=>{
    res.status(200).sendFile(__dirname+"/public/homepage.html")
})
app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use((req,res,next)=>{res.status(404).json({error:"route not found"})})
app.use((err,req,res,next)=>{
    if(err.statuscode==11000){
        console.log("cast error");
        res.status(400).json({status:"failed",error:"cast error"});
    }else if(err.name === "ValidationError"){
        console.error("validation error")
        res.status(400).json({status:"failed",error:"validation error"})
    }else if(err.name === "TypeError"){
        console.error("Type error")
        res.status(400).json({status:"failed",error:"Type error"})
    }else{console.error(err.message,"server error");res.status(500).json({status:"error",error:"server error"})}
})


connectDB(MONGO_URI ||"mongodb://localhost:27017/EcommerceDB")
app.listen(PORT || 3000,()=>{console.log(`server connected to port ${PORT}`)})

