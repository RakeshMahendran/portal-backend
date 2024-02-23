const express = require("express");
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.get('/',(req,res)=>
 res.send("Hello world"
))

const PORT = process.env.PORT || 3000;
console.log('PORT',PORT)
app.listen(PORT, ()=> {
    console.log(`App is running on the port ${PORT}`)
})