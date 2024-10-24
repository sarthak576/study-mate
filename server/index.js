const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express() // Initializes an Express application instance, creating an app object.

app.use(cors()) // Enables cross-origin requests.

app.use(express.json()) // Parses incoming request bodies with JSON payloads and makes the data available in `req.body`.

mongoose.connect('mongodb://    127.0.0.1:27')

app.post('/add',(req,res=>{
    const task = body.req.task;
})
)
app.listen(3001,()=>
{
    console.log("Server is Running...")
})
