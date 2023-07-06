const express = require("express")
const app = express()
const router = require("./routes/route")
const mongoose = require("mongoose")
app.use(express.json())

mongoose.connect("mongodb+srv://falniapp:Uj03QZNADA4QhnWQ@falniapp.oxhwst0.mongodb.net/", { useNewUrlParser: true })
    .then(() => {
        console.log("mongodb connected")
    }).catch(err => {
        console.log(err.message)
    })

app.use("/",router)   

app.listen(5000, () => {
    console.log(`port is running on ${5000}`)
})