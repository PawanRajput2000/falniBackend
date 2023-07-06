const mongoose = require("mongoose")




const registration = new mongoose.Schema({

Fullname :{
    type : String,
    required: true 
},
Email : {
    type : String,
    required : true,
    unique :true 
},
Password :{
    type : String,
    required: true 
}

})


module.exports = mongoose.model("registration", registration)
