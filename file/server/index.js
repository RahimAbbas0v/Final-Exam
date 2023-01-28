
// CONNECTION_URL=mongodb+srv://Rahim123:<password>@cluster0.moevscy.mongodb.net/?retryWrites=true&w=majority
// PASSWORD=Rahim123
// PORT=4000
//.env de problem olmasina qarsi
const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")

dotenv.config()
const {Schema}=mongoose
const productSchema = new Schema({
    img:{type:String,required:true},
    name:{type:String,required:true},
    about:{type:String,required:true},
},{
    timestamps:true
})

const Products=mongoose.model("products",productSchema)

const app=express()
app.use(cors())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})

app.get("/products",(req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})

app.get("/products/:id",(req,res)=>{
    const {id}=req.params
    Products.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
              res.send(doc)
            }else{
                  res.status(404).json({message:"Not Found"})
            }
        }else{
            res.status(404).json({message:err})

        }
    })
})

app.delete("/products/:id",(req,res)=>{
    const {id}=req.params
    Products.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(404).json({message:err})

        }
    })
})

app.post("/products",(req,res)=>{
    const product= new Products({
        img:req.body.img,
        name:req.body.name,
        about:req.body.about,

    })
    product.save()
    res.send("added")
})

const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set("strictQuery",true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connect");
        app.listen(PORT,()=>{
            console.log("Server Started");
        })
    }
})