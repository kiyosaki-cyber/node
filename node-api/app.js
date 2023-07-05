const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")
const postRoutes = require("./routes/post")
const dotenv =require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser:true} )
.then(()=> console.log("DB CONNECTED"))
mongoose.connection.on("error", err =>{
    console.log(`DB connection error:${err.message}`)
})
app.use(morgan("dev"));
app.use(expressValidator());
app.use(bodyParser.json());

app.use("/", postRoutes)
const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`a node.js is listening in port:${port}`)
})
